import { Router } from "express";
import CompanyController from "../controllers/company.controller";
import { body } from "express-validator";
import { HandleInputErrors } from "../middlewares/validationInput";

const router: Router = Router();

router.post(
  "/create",
  body("name").isString().notEmpty().withMessage("Email no valido"),
  body("ruc").isInt().notEmpty().withMessage("Rut no válido"),
  body("address")
    .isString()
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Dirección no válida"),
  HandleInputErrors,
  CompanyController.create
);

router.get("/", CompanyController.getCompanies);
router.get("/:id", CompanyController.getCompany);

router.patch(
  "/:id",
  body("name").isString().optional().withMessage("Email no valido"),
  body("ruc").isInt().optional().withMessage("Rut no válido"),
  body("address")
    .isString()
    .optional()
    .isLength({ min: 5 })
    .withMessage("Dirección no válida"),
  HandleInputErrors,
  CompanyController.updateCompany
);

export default router;
