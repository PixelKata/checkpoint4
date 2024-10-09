const express = require("express");

const router = express.Router();

const itemsRouter = require("./router/itemsRouter");
const userRouter = require("./router/userRouter");
const authorRouter = require("./router/authorRouter");
const mangaRouter = require("./router/mangaRouter");
const uploadRouter = require("./router/uploadRouter");

router.use("/items", itemsRouter);
router.use("/user", userRouter);
router.use("/authors", authorRouter);
router.use("/mangas", mangaRouter);
router.use("/upload", uploadRouter);

module.exports = router;
