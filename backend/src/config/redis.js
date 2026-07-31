import { createClient } from "redis";

let redisClient;

const connectRedis = async () => {

    // redisClient = createClient({
    //     url: "redis://redis:6379"
    // });
    redisClient = createClient({
        url: process.env.REDIS_URL
    });

    redisClient.on("error", (err) => {
        console.error("Redis Error:", err);
    });

    await redisClient.connect();

    console.log("✅ Redis Connected");
};

export { redisClient };

export default connectRedis;