
import mongoose from "mongoose"
import dotenv from "dotenv"
//const {default : mongoose} = require("mongoose")


dotenv.config(); //loads environment variables from the .env file


const connection = {} //Check for the connection state here
const connectToDb = async()=>{
    try {
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        console.log("Trying to connect to DB (Before)") //Debugging!
        const db =  await mongoose.connect(process.env.MONGO,{       
          serverSelectionTimeoutMS:20000, //20seconds
          socketTimeoutMS: 45000,//45 seconds


        });

        connection.isConnected = db.connections[0].readyState; 

        console.log("Database successfully connected")
       
      } catch (error) {
        console.log(error)
        throw new Error("Error connecting to database")
      }

}
export default connectToDb;