var express = require("express");
var router = express.Router();
var newsModel = require("../../models/newsModel");

router.get("/", async function (req, res, next) {
  var news = await newsModel.getNews();

  res.render("admin/news", {
    layout: "admin/layout",
    user: req.session.name,
    news,
  });
});

router.get("/add", async function (req, res, next) {
  res.render("admin/add", {
    layout: "admin/layout",
  });
});

router.post("/add", async function (req, res, next) {
  try {
    if (
      req.body.title != "" &&
      req.body.subtitle != "" &&
      req.body.body != ""
    ) {
      await newsModel.insertNews(req.body);
      res.redirect("/admin/news");
    } else {
      res.render("admin/add", {
        layout: "admin/layout",
        error: true,
        message: "All fields are required",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/add", {
      layout: "admin/layout",
      error: true,
      message: "An error has occurred while adding the news",
    });
  }
});

module.exports = router;
