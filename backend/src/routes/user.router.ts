import { Router } from "express";
import UserController from "../controllers/user.controller";
import { body } from "express-validator";
import { HandleInputErrors } from "../middlewares/validationInput";

const router: Router = Router();

router.post(
	"/register",
	body("email").isEmail().withMessage("Email no valido"),
	body("password")
		.isLength({ min: 8 })
		.withMessage("El password es muy corto, mínimo de 8 caracteres"),
	HandleInputErrors,
	UserController.register
);
router.post(
	"/login",
	body("email").isEmail().withMessage("Email no valido"),
	body("password")
		.isLength({ min: 8 })
		.withMessage("El password es muy corto, mínimo de 8 caracteres"),
	HandleInputErrors,
	UserController.login
);

export default router;
