import {redisClient} from "../config/redis.js";

const getDashboard = async (req, res) => {

    const cacheKey = "dashboard:test";

    // 1. Check Redis
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
        return res.json({
            success: true,
            source: "redis",
            data: JSON.parse(cachedData),
        });
    }

    // 2. Pretend this came from MongoDB
    const dashboard = {
        totalProjects: 12,
        totalTasks: 58,
        completedTasks: 40,
        pendingTasks: 18,
    };

    // 3. Store in Redis for 60 seconds
    await redisClient.set(
        cacheKey,
        JSON.stringify(dashboard),
        {
            EX: 60,
        }
    );

    res.json({
        success: true,
        source: "mongo",
        data: dashboard,
    });
};

export { getDashboard };