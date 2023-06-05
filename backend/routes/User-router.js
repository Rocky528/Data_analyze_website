const express = require("express");
const { Register, Login, ForgotPass, NewPass } = require("../controller/UserCTL");
const userRouter = express.Router();


// userRouter.get("/", getAllUser);
userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.post("/forgotpass", ForgotPass);
userRouter.post("/newpass", NewPass);
// userRouter.post("/login", logIn);

module.exports = userRouter;