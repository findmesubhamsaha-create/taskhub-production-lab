import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { me } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, me);

export default router; 