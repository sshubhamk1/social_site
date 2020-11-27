import { Router } from "express";
import { isRoleUser } from "../Engine/Middleware/EntrustRoleMiddleware";

import profileRoutes from "./Routes/route-profile";
const router = Router();

router.use(isRoleUser);

router.use("/profile", profileRoutes);
export default router;
