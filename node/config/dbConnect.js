const { default: mongoose } = require("mongoose")



const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("Connected to DB")
        }).catch(err=>{
            throw err;
        });

    } catch (error) {
        console.log("Connection Error")
    }
}
module.exports = dbConnect