import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRotes from "./routes/userRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import applyRoutes from "./routes/applyRoutes.js";
import guestBookRoutes from "./routes/guestBooksRoutes.js";
import index from "./routes/indexRoutes.js";
import path from "path";

const __dirname = path.resolve();

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/index", index);
app.use("/users", userRotes);
app.use("/tours", tourRoutes);
app.use("/apply", applyRoutes);
app.use("/guestbook", guestBookRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Servier is runing on port", PORT));
