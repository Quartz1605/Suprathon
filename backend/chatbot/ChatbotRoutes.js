import { Router } from "express";
import { ChatbotController } from "./ChatbotController.js";

const ChatbotRoutes = Router();


ChatbotRoutes.post("/chatbot",ChatbotController)


export {ChatbotRoutes}

