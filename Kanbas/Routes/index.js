import { Router } from "express";
import coursesRoutes from './coursesRoutes.js';
import navItems from "./navItemsRoutes.js";
import moduleRoutes from './moduleRoutes.js';
import userRoutes from './usersRoutes.js';
const router = Router();

router.use('/courses', coursesRoutes);

router.use('/navItems', navItems);

router.use('/modules', moduleRoutes);

router.use('/users', userRoutes);


export default router;