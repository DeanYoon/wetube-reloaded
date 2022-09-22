import express from "express";
import { handleHome, join, handleLogin } from "../controllers/userController";
import { search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", join);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", search);

export default globalRouter;
