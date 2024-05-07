import express from "express";
import authRoute from "./authRoute";
import booksRoute from "./booksRoute";
import buyersRouter from "./buyersRoute";
import sellersRoute from "./sellersRoute";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(234).send("Hellow");
});
router.use("/books", booksRoute);
router.use("/buyers", buyersRouter);
router.use("/sellers", sellersRoute);
router.use("/", authRoute);
router.use("/", authRoute);

export default router;
