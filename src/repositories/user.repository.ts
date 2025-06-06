import mongoose from "mongoose";
import UserModel from "../database/models/user.model";
import { IUserInterface } from "../database/interface/user.interface";

export const getUserRepo = async (userId: String): Promise<IUserInterface | null> => {
    try {
        const user = await UserModel.findOne({ uid: userId })
        return user
    } catch (error) {

        console.log(error)
        return null;
    }
}

export const deleteUserRepo = async (userId: String): Promise<boolean> => {
    try {
        const deleted = await UserModel.findOneAndDelete({ uid: userId })
        if (deleted)
            return true
        else
            return false;
    } catch (error) {

        console.log(error)
        return false;
    }
}

export const createUserRepo = async (user: IUserInterface): Promise<boolean> => {
    try {
        const result = await UserModel.create(user);
        if (result)
            return true
        else
            return false;
        return true;
    } catch (error) {

        console.log(error)
        return false;
    }
};

export const updateUserRepo = async (userId: String, updatedUser: IUserInterface): Promise<boolean> => {
    try {
        const result = await UserModel.findOneAndUpdate({ uid: userId }, updatedUser, { new: true })
        if (result)
            return true
        else
            return false;
    } catch (error) {

        console.log(error)
        return false;
    }
}

//
export const updateUserWithTweetIDRepo = async (userId: String, tweetId: String): Promise<boolean> => {
    try {
        const result = await UserModel.findOneAndUpdate({ uid: userId }, { $push: { tweets: tweetId } }, { new: true })
        if (result)
            return true
        else
            return false;
    } catch (error) {

        console.log(error)
        return false;
    }
}