import { Router } from "express";
import userRouter from "./user.router";
import companyRouter from "./company.router";
import cargoRouter from "./cargo.router";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/companys", companyRouter);
router.use("/cargo",cargoRouter)

export default router;
