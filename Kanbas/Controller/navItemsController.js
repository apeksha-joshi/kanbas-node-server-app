import db from '../Database/index.js';

const getKanbasNavItems = (req, res) => {
    const kanbasItems = db.kanbas_nav_items;
    res.send(kanbasItems);
};

const getCourseItems = (req, res) => {
    const courseItems = db.course_nav;
    res.send(courseItems)
}

export default {
    getKanbasNavItems,
    getCourseItems,
}