import { BookmarkModel } from "../db/db.js";

export const addBookmark = async (req, res) =>{
    const { itemId, itemType } = req.body;
    const emailId = req.email;

    if(!emailId){
        return res.status(400).json({ message: "Email ID Not Found" });
    }

    if (!itemId || !itemType || !['event', 'course'].includes(itemType)) {
        return res.status(400).json({ message: "Invalid data" });
    }

    try {
        const entry = await BookmarkModel.create({ emailId, itemId, itemType });
        res.status(201).json({ message: "Item added to Bookmarks", bookmark: entry });
    } catch (e) {
        if (e.code === 11000) {
        res.status(409).json({ message: "Already in your Bookmarks" });
        } else {
        res.status(500).json({ message: "Server error", error: e.message });
        }
    }
}

export const getBookmarks = async (req, res) => {
    const emailId = req.email;

    try {
        const boookmakrs = await BookmarkModel.find({ emailId });
        res.status(200).json({ boookmakrs });
    } catch (e) {
        res.status(500).json({ message: "Server error", error: e.message });
    }
}