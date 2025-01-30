var express = require("express");
var router = express.Router();
var newsModel = require("../models/newsModel");
var employeesModel = require("../models/employeesModel");
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

router.get("/employees", async function (req, res, next) {
  try {
    let employees = await employeesModel.getEmployees();

    employees = employees.map((employee) => {
      let image = "";
      if (employee.img_id) {
        image = cloudinary.url(employee.img_id, {
          width: 1800,
          height: 1650,
          crop: "fill",
        });
      }
      return {
        ...employee, 
        image,
      };
    });

    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Error fetching employees" });
  }
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
