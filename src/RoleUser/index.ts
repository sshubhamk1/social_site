import { Router } from "express";
import { isRoleUser } from "../Engine/Middleware/EntrustRoleMiddleware";

import profileRoutes from "./Routes/route-profile";
import authRoutes from "./Routes/rotue-auth";
const router = Router();

router.use(isRoleUser);

router.use("/profile", profileRoutes);
router.use("/auth", authRoutes);
export default router;
