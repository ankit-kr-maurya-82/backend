import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server id running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log(`MONGO db  connection failed !!! ${err}`);
})






// import express from "express";
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is listening on port ${process.env.PORT}`);
//         });

//     } catch(error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// }
// )();