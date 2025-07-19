import PDFDocument from "pdfkit" 
import { UserModel } from "../db/db.js";
import { EventModel } from "../db/db.js";

const generateCertificate = async (req, res) => {
  
  const email = req.email;
  const eventId = req.body.eventId

  const user = await UserModel.findOne({
    "email" : email
  })

  const event = await EventModel.findById(eventId)

  if(!event){
    return res.status(401).json({"message" : "Event not found." })
  }

  if(!user){
    return res.status(401).json({"message" : "User not found."})
  }

  

  if (!user.firstName || typeof user.firstName !== 'string' || user.firstName.trim() === '') {
    return res.status(400).json({ error: 'Participant name is required and must be a non-empty string' });
  }

  // Create a new PDF document
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'landscape',
    margin: 50,
  });

  // Set response headers for PDF download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${user.firstName}_Certificate.pdf"`);

  // Pipe the PDF to the response
  doc.pipe(res);

  // Add background gradient
  const gradient = doc.linearGradient(0, 0, doc.page.width, doc.page.height);
  gradient.stop(0, '#e6f0fa').stop(1, '#ffffff');
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(gradient);

  // Add decorative border
  doc.lineWidth(5)
     .strokeColor('#1a73e8')
     .rect(20, 20, doc.page.width - 40, doc.page.height - 40)
     .stroke();
  doc.lineWidth(2)
     .strokeColor('#ffd700')
     .rect(30, 30, doc.page.width - 60, doc.page.height - 60)
     .stroke();

  // Add logo placeholder (uncomment and update path to your logo)
  // doc.image('path/to/logo.png', doc.page.width - 150, 30, { width: 100, height: 100 });

  // Add ornamental corners (simple circles for elegance)
  doc.circle(50, 50, 10).fill('#ffd700');
  doc.circle(doc.page.width - 50, 50, 10).fill('#ffd700');
  doc.circle(50, doc.page.height - 50, 10).fill('#ffd700');
  doc.circle(doc.page.width - 50, doc.page.height - 50, 10).fill('#ffd700');

  // Add content to the PDF
  doc.font('Times-Bold').fontSize(48).fillColor('#1a73e8').text('Certificate of Participation', { align: 'center', y: 100 });
  doc.moveDown(2);
  doc.font('Helvetica').fontSize(24).fillColor('#333333').text('This certifies that', { align: 'center' });
  doc.moveDown(1);
  doc.font('Times-Bold').fontSize(36).fillColor('#d81b60').text(`${user.firstName} ${user.lastName}`, { align: 'center' });
  doc.moveDown(1);
  doc.font('Helvetica').fontSize(24).fillColor('#333333').text('has successfully participated in', { align: 'center' });
  doc.moveDown(1);
  doc.font('Helvetica-Bold').fontSize(24).fillColor('#333333').text(`${event.Title} organized on ${event.endDate}`, { align: 'center' });
  doc.moveDown(1);
  doc.font('Helvetica').fontSize(18).fillColor('#555555').text(`Presented by ${event.Creator}`, { align: 'center' });

  

  // Add footer
  doc.font('Helvetica-Oblique').fontSize(12).fillColor('#777777').text(event.Title + " - " + event.Creator, 0, doc.page.height - 40, { align: 'center' });

  // Finalize the PDF
  doc.end();
};

export {generateCertificate}