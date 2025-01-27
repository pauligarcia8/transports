var express = require("express");
var router = express.Router();
var newsModel = require("../../models/newsModel");

var util = require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get("/", async function (req, res, next) {
  var news = await newsModel.getNews();

  news = news.map((news) => {
    if (news.id_img) {
      const image = cloudinary.image(news.id_img, {
        width: 100,
        height: 70,
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
    var id_img = "";
    if (req.files && Object.keys(req.files).length > 0) {
      image = req.files.image;
      id_img = (await uploader(image.tempFilePath)).public_id;
    }

    if (
      req.body.title != "" &&
      req.body.subtitle != "" &&
      req.body.body != ""
    ) {
      await newsModel.insertNews({
        ...req.body,
        id_img,
      });
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
  let id = req.params.id;
  let news = await newsModel.getNewById(id);
  if (news.id_img) {
    await destroy(news.id_img);
  }
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
    let id_img = req.body.img_original;
    let delete_img = false;

    if (req.body.img_delete === "1") {
      id_img = null;
      delete_img = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        image = req.files.image;
        id_img = (await uploader(image.tempFilePath)).public_id;
        delete_img = true;
      }
    }
    if (delete_img && req.body.img_original) {
      console.log("Deleting image with ID:", req.body.img_original);
      await destroy(req.body.img_original);
    }

    const obj = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      body: req.body.body,
      id_img,
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
