import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import express from "express";
import connectDB from "./db/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
  );

  app.use(express.json({ limit: "16kb" }));
  app.use(
    express.urlencoded({
      extended: true,
      limit: "16kb",
    })
    );
    app.use(express.static("public"));
    app.use(cookieParser());

// routes import
import router from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", router);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGOD Connection Failed !!! ", err);
  });
