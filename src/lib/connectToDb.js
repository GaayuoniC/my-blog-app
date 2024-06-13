

const {default : mongoose} = require("mongoose")


const connection = {} //Check for the connection state here
export const connectToDb = async()=>{
    try {
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        const db =  await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
       
      } catch (error) {
        console.log(error)
        throw new Error("Error connecting to database")
      }

}