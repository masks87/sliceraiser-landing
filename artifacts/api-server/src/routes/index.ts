import { Router, type IRouter } from "express";
import healthRouter from "./health";
import opportunitiesRouter from "./opportunities";
import portfolioRouter from "./portfolio";
import contactRouter from "./contact";
import irInquiryRouter from "./ir-inquiry";
import appWaitlistRouter from "./app-waitlist";

const router: IRouter = Router();

router.use(healthRouter);
router.use(opportunitiesRouter);
router.use(portfolioRouter);
router.use(contactRouter);
router.use(irInquiryRouter);
router.use(appWaitlistRouter);

export default router;
