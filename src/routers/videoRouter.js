import express from "express";
import {
  handleWatchVideo,
  handleEditVideo,
  handleRemoveVideo,
  handleCommentVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);
videoRouter.get("/delete", handleRemoveVideo);
videoRouter.get("/comment", handleCommentVideo);
export default videoRouter;
