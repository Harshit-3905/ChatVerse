const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const { chats } = require("./data/data");

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
