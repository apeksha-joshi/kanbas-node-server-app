import * as userDao from '../dao/users.js';
//let currentUser = null;

const createUser = async (req, res) => { 
    try{
        const user = await userDao.createUserDB(req.body);
        res.json(user);
    }catch(error){
        res.status(400).json({message: "User already exists"});
    }    
};
const deleteUser = async (req, res) => { 
    const status = await userDao.deleteUser(req.params.userId);
    res.json(status);
};
const findAllUsers = async (req, res) => { 
    const users = await userDao.findAllUsers();
    res.json(users);
};
const findUserById = async (req, res) => { 
    const user = await userDao.findUserById(req.params.userId);
    res.json(user);
};
const updateUser = async (req, res) => {
    try{
        const {userId} = req.params;
        const status = await userDao.updateUser(userId, req.body);
        const currentUser = await userDao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    }catch(error){
        res.status(400).json({message: "User doesnot exist"});
    } 
    
 };
const signup = async (req, res) => { 
    const user = await userDao.findUserByUsername(req.body.username);
    if(user){
        res.status(400).json({message: "Username already taken"});
        return;
    }
    await userDao.createUserDB(req.body);
    const currentUser = await userDao.findUserByCredentials(req.body.username, req.body.password);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
};
const signin = async (req, res) => {
    const {username, password} = req.body;
    const currentUser = await userDao.findUserByCredentials(username, password);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
};
const signout = (req, res) => {
    // currentUser = null;
    req.session.destroy();
    res.json(200);
 };
const account = async (req, res) => {
    res.json(req.session['currentUser']);
};


export default{
    createUser,
    deleteUser,
    findAllUsers,
    findUserById,
    updateUser,
    signup,
    signin,
    signout,
    account
}