var express = require("express");
var router = express.Router();
var newsModel = require("../models/newsModel");
var cloudinary = require("cloudinary").v2;

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

module.exports = router;
