import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error("MONGO_URI environment variable is not set");
            return;
        }
        
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        // Don't exit process in serverless environment
        if (process.env.NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
}

export default connectMongoDB;