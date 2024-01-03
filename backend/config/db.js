const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL);
        console.log(`MongoDB connected: ${conn.connection.host}` .cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}` .red.bold);
        process.exit();
    }
}
module.exports = {connectDB}; 