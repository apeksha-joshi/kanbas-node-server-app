import { Router } from "express";
import userController from "../Controller/userController.js";

const router = Router()

router.post("/", userController.createUser);
router.get("/", userController.findAllUsers);
router.get("/:userId", userController.findUserById);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/signout", userController.signout);
router.post("/account", userController.account);

export default router;