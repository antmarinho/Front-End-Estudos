const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery",true)

async function main() {

    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.lkyttc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("db on")
}

main().catch((err) => console.log(err))

module.exports = main