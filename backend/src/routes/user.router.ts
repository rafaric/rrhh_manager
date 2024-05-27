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
	body("nombre")
		.isLength({ min: 3 })
		.withMessage("El nombre es muy corto, mínimo de 4 caracteres"),
	body("apellido")
		.isLength({ min: 3 })
		.withMessage("El apellido es muy corto,mínimo de 5 caracteres"),
	body("dni")
		.isInt({ min: 10000000, max: 99999999 })
		.withMessage("El dni debe estar entre 10000000 y 99999999"),
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
