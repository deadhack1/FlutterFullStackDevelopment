import mongoose, { Document, Schema } from "mongoose";
import { ITweetInterface } from "../interface/tweet.interface";
const tweetScheme = new Schema<ITweetInterface>({
    tweetId: { type: String, required: true },
    content: { type: String, default:"" },
    adminId: { type: String, required:true },
    createdAt: { type: String, required: true }
});

const TweetModel = mongoose.model<ITweetInterface>('TweetModal', tweetScheme)
export default TweetModel;