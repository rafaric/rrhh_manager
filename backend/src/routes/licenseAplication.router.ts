import { Router } from "express";
import LicenseAplicationController from "../controllers/licenseAplication.controller";

import { body } from "express-validator";
import { HandleInputErrors } from "../middlewares/validationInput";
import { isAdmin } from "../middlewares/validateAdmin";
import { isLogged } from "../middlewares/validateSession";
import { isEmployee } from "../middlewares/validateEmployee";

const router: Router = Router();

router.post("/create", isEmployee, LicenseAplicationController.create);
router.get("/AllLicenses", isAdmin, LicenseAplicationController.getLicenses);
router.get(
  "/myLicenses",
  isEmployee,
  LicenseAplicationController.getMyLicenses
);

router.get("/:id", isLogged, LicenseAplicationController.getLicense);
router.patch("/:id", isAdmin, LicenseAplicationController.updateLicense);

export default router;
