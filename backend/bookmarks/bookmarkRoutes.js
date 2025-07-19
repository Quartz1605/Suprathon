import { Router } from "express";
import { addBookmark } from "./bookmarksControllers.js";
import { getBookmarks } from "./bookmarksControllers.js";

const BookmarkRoutes = Router()

BookmarkRoutes.post("/addbookmark", addBookmark)
BookmarkRoutes.get("/getbookmarks", getBookmarks)

export {BookmarkRoutes}