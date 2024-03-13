const mongoose = require('mongoose')

async function main() {

    try {

        mongoose.set('strictQuery', true)

        await mongoose.connect('mongodb+srv://antmarinho:MiLaVfrQhDQeHepJ@cluster0.l5gnu9i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        
        console.log('db on')

    } catch (error) {
        console.log(error)
    }

}

module.exports = main;