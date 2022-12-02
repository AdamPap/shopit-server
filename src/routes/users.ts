import { Router } from "express";
import * as users from "../controllers/user";

const router = Router({ mergeParams: true });

router.post("/register", users.register);
router.post("/login", users.login);
router.post("/logout", users.logout);
router.get("/current-user", users.currentUser);

export default router;
