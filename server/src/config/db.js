const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process on failure
    }
}

module.exports = connectDB;
