import db from '../Database/index.js';

const getAllCourses = (req, res) => {
    const courses = db.courses;
    res.send(courses);
};


const addCourse = (req,res) => {
    
    const newCourse = {...req.body, _id: req.body.number};
    const existingCourse = db.courses.find((course) => course.number === newCourse.number);
    if(existingCourse){
        res.status(400).send("Course already exists")
    }else{
        db.courses.push(newCourse);
        res.status(200).send(newCourse);
    }
};

const addModule = (req,res)=> {
    try{
        const {courseId} = req.params;
        const modules = db.modules.filter((m)=> m.course_id === courseId);
        const newModuleId = `${courseId}_M${modules.length+1}`;
        const newModule = {
            _id: newModuleId,
            ...req.body
        };
        db.modules.push(newModule);
        res.status(200).send(newModule);
    }catch(error){
        res.status(500).send("Internal server error");
    }
    
};

const deleteCourse = (req,res) => {
    try{
        const {courseId} = req.params;
        db.courses = db.courses.filter((c) => c._id !== courseId);
        res.sendStatus(204);
    }catch(error){
        res.status(500).send("Internal server error");
    }
};

const deleteModule = (req, res) => {
    try{
        const {moduleId} = req.params;
        db.modules = db.modules.filter((m) => m._id !== moduleId);
        res.sendStatus(204);
    }catch(error){
        res.status(500).send("Internal server error");
    }
};


const updateCourse = (req,res) => {
    try{
        const {courseId} = req.params;
        const course = req.body;
        const existingCourse = db.courses.find((course) => course._id === courseId);
        if (existingCourse) {
            db.courses = db.courses.map((c)=>c._id===courseId ? course : c);
            res.sendStatus(204);
        } else {
            res.status(404).send("Course not found to update");
        } 
    }catch(error){
        res.status(500).send("Internal server error");
    }
};

const updateModule = (req, res) => {
    try{
        const {moduleId} = req.params;
        const module = req.body;
        const existingModule = db.modules.find((m) => m._id === moduleId);
        
        if (existingModule) {
            db.modules = db.modules.map((m)=>m._id===moduleId ? module : m);
            res.sendStatus(204);
        } else {
            res.status(404).send("Module not found to update");
        } 
    }catch(error){
        res.status(500).send("Internal server error");
    }
};

const getCourse = (req,res) => {
    try{
        const {courseId} = req.params;
        const course = db.courses.find((c) => c._id === courseId);
        if(course){
            res.status(200).send(course);
        }else{
            res.status(404).send("Course not found");
        }
        
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const getCourseModules = (req, res) => {
    try{
        const { courseId } = req.params;
        const modules = db.modules.filter((m)=> m.course_id === courseId);
        res.status(200).send(modules);
    }catch(error){
        res.status(500).send("Internal server error");
    }   
}


const getCourseTasks = (req, res)=> {
    try{
        const { courseId } = req.params;
        const modules = db.course_tasks.filter((m)=> m.course_id === courseId);
        res.status(200).send(modules);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}
 export default {
     getAllCourses,
     addCourse,
     deleteCourse,
     updateCourse,
     getCourse,
     getCourseModules,
     getCourseTasks,
     addModule,
     deleteModule,
     updateModule,
 }