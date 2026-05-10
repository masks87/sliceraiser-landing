import { Router, type IRouter } from "express";
import healthRouter from "./health";
import opportunitiesRouter from "./opportunities";
import portfolioRouter from "./portfolio";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(opportunitiesRouter);
router.use(portfolioRouter);
router.use(contactRouter);

export default router;
