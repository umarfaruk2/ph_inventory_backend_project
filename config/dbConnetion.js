import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'acc_inventory'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('database connected....')
    } catch (error) {
        throw error;
    }
}

export default connectDB;