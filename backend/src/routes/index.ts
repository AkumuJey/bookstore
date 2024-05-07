import express from "express";
import booksRoute from "./booksRoute";
import buyersRouter from "./buyersRoute";
import sellersRoute from "./sellersRoute";
import loginRoute from "./loginRoute";
import signupRoute from "./signupRoute";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(234).send("Hellow");
});
router.use("/books", booksRoute);
router.use("/buyers", buyersRouter);
router.use("/sellers", sellersRoute);
router.use("/login", loginRoute);
router.use("/signup", signupRoute);

export default router;
