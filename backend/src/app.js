import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "TaskHub API is running"
    });
});

app.use(errorMiddleware);

export default app;