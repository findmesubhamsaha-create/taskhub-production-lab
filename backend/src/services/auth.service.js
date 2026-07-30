import User from "../models/user.model.js";
import ConflictError from "../errors/ConflictError.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";
import { generateAccessToken } from "../utils/jwt.js";
import { publishWelcomeEmail } from "../queues/email.queue.js";

export const registerUser = async ({ name, email, password }) => {

    const existingUser = await User.findOne({ email });
    //const existingUserWithPassword = await User.findOne({ email }).select("+password");

    if (existingUser) {
        //throw new Error("User already exists");
        throw new ConflictError("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    await publishWelcomeEmail(user);

    //return user;
    const token = generateAccessToken(user);
    
    return {
        user,
        accessToken: token
    };
};

export const loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        throw new UnauthorizedError("Invalid email or password");
    }

    const token = generateAccessToken(user);

    user.password = undefined;

    return {
        user,
        accessToken: token
    };
};
