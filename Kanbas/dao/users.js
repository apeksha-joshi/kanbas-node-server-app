import model from '../models/users/userModel.js'

export const createUserDB = async (user) => {
    try{
        const newUser = await model.create(user);
        return newUser;
    }catch(error){
        throw new Error("Duplicate User")
    }
    
}

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) => model.findOne({username: username});

export const findUserByCredentials = (username, password) => model.findOne({username, password});

export const updateUser = async (userId, user) => {
    const result = await model.updateOne({_id: userId}, {$set : user});
}

export const deleteUser = (userId) => model.deleteOne({_id: userId});