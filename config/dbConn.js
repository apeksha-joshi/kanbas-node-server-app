import mongoose from 'mongoose';

const dbConnect = async () => {
    try{
        const CONN_STRING = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/kanbas'
        await mongoose.connect(CONN_STRING);
        console.log("Database connected");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

export default dbConnect;