import { Router } from "express";
import courseController from '../Controller/courseController.js';

const router = Router();

router.get('/',courseController.getAllCourses); 

router.get('/:courseId', courseController.getCourse);
router.post('/', courseController.addCourse);
router.delete('/:courseId', courseController.deleteCourse);

router.put('/:courseId', courseController.updateCourse);

router.get('/:courseId/modules', courseController.getCourseModules);
router.post('/:courseId/modules', courseController.addModule);

router.get('/:courseId/tasks', courseController.getCourseTasks);






export default router;