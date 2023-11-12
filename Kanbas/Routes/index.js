import { Router } from "express";
import coursesRoutes from './coursesRoutes.js';
import navItems from "./navItemsRoutes.js";
import moduleRoutes from './moduleRoutes.js';

const router = Router();

router.use('/courses', coursesRoutes);

router.use('/navItems', navItems);

router.use('/modules', moduleRoutes);




export default router;