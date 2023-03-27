const express = require("express");
const dbConnect = require("./config/dbConnect");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});