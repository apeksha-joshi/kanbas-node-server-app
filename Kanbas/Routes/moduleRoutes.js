import { Router } from "express";
import courseController from '../Controller/courseController.js';

const router = Router();

router.put('/:moduleId', courseController.updateModule);
router.delete('/:moduleId', courseController.deleteModule);



export default router;