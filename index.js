import express from "express";
import userRoute from "./app/routes/userRoute";
import bodyParser from "body-parser";
import authRouter from "./app/routes/authRoute";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/user", userRoute);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("your app run in port3000");
});
