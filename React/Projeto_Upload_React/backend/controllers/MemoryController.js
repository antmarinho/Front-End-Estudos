const Memory = require("../models/Memory")

const fs = require("fs")

const removeOldImage = (memory) => {

  fs.unlink(`public/${memory.src}`, (err) => {
    if(err) {
      console.log(err)
    } else {
      console.log("iamagem excluida")
    }
  })

}

const createMemory = async (req, res) => {

    try {

      const { title, description } = req.body;

      const src = `images/${req.file.filename}`;
  
      if (!title || !description) {
        return res.status(400).json({ msg: "Por favor, preencha todos os campos." });
      }
  
      const newMemory = new Memory({

        title,
        src,
        description,

      });

      await newMemory.save();

      res.json({ msg: "Memória criada com sucesso!", newMemory });

    } catch (err) {

      res.status(500).send("Server Error");

    }
};

const getMemories = async(req,res) => {

  try {

    const memories = await Memory.find()

    res.json(memories)
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

const getMemory = async(req,res) => {

  try {

    const memory = await Memory.findById(req.params.id)

    if(!memory) {
      return res.status(400).json({ msg: "memoria n encontrada." });
    }

    res.json(memory)
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

const deleteMemory = async (req,res) => {
  
  try {

    const memory = await Memory.findByIdAndDelete(req.params.id)

    if(!memory) {
      return res.status(400).json({ msg: "memoria n encontrada." });
    }

    removeOldImage(memory)

    res.json({msg: "memoria excluida"})
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

const updateMemory = async (req,res) => {

  try {

    const {title,description} = req.body

    let src = null

    if(req.file) {
      src = `images/${req.file.filename}`
    }

    const memory = await Memory.findById(req.params.id)

    if(!memory) {
      return res.status(400).json({ msg: "memoria n encontrada." });
    }

    if(src) {
      removeOldImage(memory)
    }

    const updateData = {}

    if(title) updateData.title = title
    if(description) updateData.description = description
    if(src) updateData.src = src

    const upMemory = await Memory.findByIdAndUpdate(req.params.id,updateData, {new: true})

    res.json({upMemory, msg: "memoria atualizada"})
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

const toggleFavorite = async (req,res) => {

  try {

    const memory = await Memory.findById(req.params.id)

    if(!memory) {
      return res.status(400).json({ msg: "memoria n encontrada." });
    }

    memory.favorite = !memory.favorite

    await memory.save()

    res.json({msg: "adicionada aos favoritos", memory})
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

const addComment = async (req,res) => {

  try {

    const {name,text} = req.body

    if(!name || !text) {
      return res.status(400).json({msg: "por favoir preencha todos os camposss"})
    }

    const comment = {name,text}

    const memory = await Memory.findById(req.params.id)

    if(!memory) {
      return res.status(400).json({ msg: "memoria n encontrada." });
    }

    memory.comments.push(comment)

    await memory.save()

    res.json({msg: "Comentario adicionado", memory})
    
  } catch (error) {

    res.status(500).send("Server Error");

  }

}

module.exports = {
    createMemory,
    getMemories,
    getMemory,
    deleteMemory,
    updateMemory,
    toggleFavorite,
    addComment
}