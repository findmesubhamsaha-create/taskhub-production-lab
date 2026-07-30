import { channel } from "../config/rabbitmq.js";

const publishWelcomeEmail = async (user) => {
    if (!channel) {
        throw new Error("RabbitMQ channel not initialized");
    }

    const message = {
        type: "WELCOME_EMAIL",
        email: user.email,
        name: user.name,
        createdAt: new Date().toISOString()
    };

    channel.sendToQueue(
        "email_queue",
        Buffer.from(JSON.stringify(message)),
        {
            persistent: true
        }
    );

    console.log(`📨 Published welcome email for ${user.email}`);
};

export { publishWelcomeEmail };