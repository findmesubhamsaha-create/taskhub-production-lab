import amqp from "amqplib";

const connection = await amqp.connect("amqp://rabbitmq");

const channel = await connection.createChannel();

await channel.assertQueue("email_queue");

console.log("👷 Worker started...");
console.log("📬 Waiting for email jobs...");

channel.consume("email_queue", (msg) => {

    if (!msg) return;

    const data = JSON.parse(msg.content.toString());

    console.log("--------------------------------");
    console.log("📧 Sending Welcome Email");
    console.log(`To   : ${data.email}`);
    console.log(`Name : ${data.name}`);
    console.log("--------------------------------");

    channel.ack(msg);

});