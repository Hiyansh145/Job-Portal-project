import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
dotenv.config({});
const app = express();

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "https://job-portal-project-2-7ve1.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.use((req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend","dist", "index.html"));
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect DB:", error.message);
    process.exit(1); // exit process if DB fails
  }
};

startServer();

//  mongodb+srv://hiyanshupadhyay555_db_user:2yHqGsn4Xq46F1a2@cluster0.jt3ymjy.mongodb.net/
