import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  createProductMenu,
  deleteProductMenu,
  findAllMenu,
} from "./controllers/MenuController";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME || "",
  api_key: process.env.API_KEY || "",
  api_secret: process.env.API_SECRET || "",
});

dotenv.config();
const app = express();

//.env files
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload({ useTempFiles: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

//menu
app.post("/productMenu", createProductMenu);
app.delete("/deleteMenu/:id", deleteProductMenu);
app.get("/menu", findAllMenu);

// listen to app
app.listen(PORT, () => console.log("listening to port " + PORT));
