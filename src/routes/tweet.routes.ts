import { Router } from "express";
import { getTweetController,createTweetController,deleteTweetController,updateTweetController } from "../controllers/tweet.controller";

const tweetRouter=Router();

tweetRouter.get("/:tweetId",getTweetController)
// tweetRouter.get("/",getAllTweetController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:tweetId",deleteTweetController)
tweetRouter.put("/",updateTweetController)
export default tweetRouter;