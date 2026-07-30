import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDatabase from "./config/database.js";
import connectRedis from "./config/redis.js";
import connectRabbitMQ from "./config/rabbitmq.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {

    await connectDatabase();
    await connectRedis();
    await connectRabbitMQ();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });

};

startServer();