import { Router, type IRouter } from "express";
import healthRouter from "./health";
import opportunitiesRouter from "./opportunities";
import portfolioRouter from "./portfolio";
import contactRouter from "./contact";
import irInquiryRouter from "./ir-inquiry";
import appWaitlistRouter from "./app-waitlist";
import profileRouter from "./profile";
import publicSiteSettingsRouter from "./public/site-settings";
import publicPlatformStatsRouter from "./public/platform-stats";
import publicMarketStatsRouter from "./public/market-stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use(opportunitiesRouter);
router.use(portfolioRouter);
router.use(contactRouter);
router.use(irInquiryRouter);
router.use(appWaitlistRouter);
router.use(profileRouter);
router.use(publicSiteSettingsRouter);
router.use(publicPlatformStatsRouter);
router.use(publicMarketStatsRouter);

export default router;
