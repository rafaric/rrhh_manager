import { Router } from "express";
import userRouter from "./user.router";
import companyRouter from "./company.router";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/companys", companyRouter);

export default router;
