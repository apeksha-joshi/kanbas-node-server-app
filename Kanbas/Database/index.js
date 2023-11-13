import kanbas_nav_items from "./kanbas_nav_items.json" assert {type:"json"};
import courses from './courses.json' assert {type:"json"};
import course_nav from './course_nav.json' assert {type:"json"};
import modules from './modules.json' assert {type:"json"};
import course_tasks from './course_tasks.json' assert {type:"json"};

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const kanbas_nav_items = require("./kanbas_nav_items.json");
// const courses = require("./courses.json");
// const course_nav = require("./course_nav.json");
// const modules = require("./modules.json");
// const course_tasks = require("./course_tasks.json");

export default {
    kanbas_nav_items,
    courses,
    course_nav,
    modules,
    course_tasks
};
