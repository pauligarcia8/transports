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

router.get("/delete/:id", async function (req, res, next) {
  var id = req.params.id;
  await newsModel.deleteNewById(id);
  res.redirect("/admin/news");
});

router.get("/edit/:id", async function (req, res, next) {
  var id = req.params.id;
  var news = await newsModel.getNewById(id);
  
  res.render("admin/edit", {
    layout: "admin/layout",
    news,
  });
});

router.post("/edit", async function (req, res, next) {
  try {
    const obj = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      body: req.body.body,
    };

    await newsModel.editNewById(obj, req.body.id);
    res.redirect("/admin/news");
    
  } catch (error) {
    res.render("admin/edit", {
      layout: "admin/layout",
      error: true,
      message: "An error has occurred while editing the news",
    });
  }
});

module.exports = router;
