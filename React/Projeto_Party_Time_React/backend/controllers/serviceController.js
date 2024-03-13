const {Service: ServiceModel} = require('../model/Service')

const serviceController = {

    create: async(req,res) => {

        try {

            const service = {
               name: req.body.name,
               description: req.body.description,
               price: req.body.price,
               image: req.body.image,
            }

            const response = await ServiceModel.create(service)

            res.status(201).json({response, msg: 'servico criado com sucesso'})
            
        } catch (error) {
            console.log(error)
        }

    },

    getAll: async(req,res) => {

        try {

            const service = await ServiceModel.find()

            res.json(service)
            
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req,res) => {

        try {

            const id = req.params.id

            const service = await ServiceModel.findById(id)

            if(!service) {
                res.status(404).json({msg: 'servico n encontrado'})
                return
            }

            res.json(service)
            
        } catch (error) {
            console.log(erro)
        }
    },

    delete: async(req,res) => {

        try {

            const id = req.params.id

            const service = await ServiceModel.findById(id)

            if(!service) {
                res.status(404).json({msg: 'servico n encontrado'})
                return
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({deletedService, msg: 'excluido com sucesso'})
            
        } catch (error) {
            console.log(error)
        }
    },

    update: async(req,res) => {

        const id = req.params.id

        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        }
        
        const updateService = await ServiceModel.findByIdAndUpdate(id,service)

        if(!updateService) {
            res.status(404).json({msg: 'servico n encontrado'})
            return
        }

        res.status(200).json({service, msg: 'servico atualizado'})

    }

}

module.exports = serviceController