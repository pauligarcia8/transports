var express = require("express");
var router = express.Router();
var newsModel = require("../models/newsModel");
var cloudinary = require("cloudinary").v2;
var nodemailer = require("nodemailer");

router.get("/news", async function (req, res, next) {
  let news = await newsModel.getNews();

  news = news.map((news) => {
    if (news.id_img) {
      const image = cloudinary.url(news.id_img, {
        width: 400,
        height: 250,
        crop: "fill",
      });
      return {
        ...news,
        image,
      };
    } else {
      return {
        ...news,
        image: "",
      };
    }
  });
  res.json(news);
});

router.post("/contact", async (req, res) => {
  const email = {
    to: "pauligarcia_05@hotmail.com",
    subject: "Web Contact",
    html: `${req.body.name} its contacting from the web requiring more information. Please respond to ${req.body.email}. <br> Also, the user made this comment: ${req.body.message}. <br> User phone: ${req.body.phone}`,
  };
  
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transport.sendMail(email);

  res.status(201).json({ error: false, message: "Message sent" });
});

module.exports = router;
