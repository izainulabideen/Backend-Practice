import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

import express from "express";
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGOD Connection Failed !!! ", err);
  });

// First Method To Connect Database
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
