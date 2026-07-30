import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });

        }

        const token = authHeader.split(" ")[1];

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = payload;

        next();

    } catch (error) {

        next(error);

    }

};

export default authenticate;