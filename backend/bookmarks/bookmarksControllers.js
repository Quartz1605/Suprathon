import { BookmarkModel } from "../db/db.js";

export const addBookmark = async (req, res) =>{
    const { itemId, itemType } = req.body;
    const userId = req.id;

    if (!itemId || !itemType || !['event', 'course'].includes(itemType)) {
        return res.status(400).json({ message: "Invalid data" });
    }

    try {
        const entry = await BookmarkModel.create({ userId, itemId, itemType });
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
    const userId = req.id;

    try {
        const boookmakrs = await BookmarkModel.find({ userId });
        res.status(200).json({ boookmakrs });
    } catch (e) {
        res.status(500).json({ message: "Server error", error: e.message });
    }
}