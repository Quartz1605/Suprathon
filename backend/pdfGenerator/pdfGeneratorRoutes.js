import { Router } from "express";
import { generateCertificate } from "./pdfGeneratorController.js";

const pdFGenRoutes = Router()

pdFGenRoutes.post("/generatePdf",generateCertificate)

export {pdFGenRoutes}