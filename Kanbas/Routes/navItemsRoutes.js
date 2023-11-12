import { Router } from "express";
import navItemController from '../Controller/navItemsController.js';

const router = Router();

router.get('/kanbas',navItemController.getKanbasNavItems); 
router.get('/course',navItemController.getCourseItems); 

export default router;