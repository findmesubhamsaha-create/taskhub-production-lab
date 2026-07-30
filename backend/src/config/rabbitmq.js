import amqp from "amqplib";

let channel;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectRabbitMQ = async () => {
    let retries = 30;

    while (retries > 0) {
        try {
            console.log("🐰 Connecting to RabbitMQ...");

            const connection = await amqp.connect("amqp://rabbitmq");

            channel = await connection.createChannel();

            await channel.assertQueue("email_queue");

            console.log("✅ RabbitMQ Connected");

            return;
        } catch (err) {
            retries--;

            console.log(
                `⚠️ RabbitMQ not ready. Retrying in 2 seconds... (${retries} retries left)`
            );

            await sleep(1000);
        }
    }

    throw new Error("❌ Could not connect to RabbitMQ.");
};

export { channel };
export default connectRabbitMQ;