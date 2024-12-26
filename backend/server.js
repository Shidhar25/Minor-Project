import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// Initialize connections with better error handling
const initializeServices = async () => {
    try {
        // Connect to MongoDB first
        await connectDB();
        
        // Then connect to Cloudinary
        await connectCloudinary();
        
        console.log("✅ All services connected successfully");
        return true;
    } catch (error) {
        console.error("❌ Service initialization failed:", error);
        process.exit(1); // Exit if critical services fail
    }
};

// middlewares
app.use(express.json())
app.use(cors({
<<<<<<< HEAD
    origin: process.env.NODE_ENV === 'production' 
        ? [process.env.FRONTEND_URL, process.env.ADMIN_URL]
        : ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
=======
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, process.env.ADMIN_URL]
    : ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
>>>>>>> origin/main
}))

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
    res.send("API Working")
});

<<<<<<< HEAD
// Add this before your routes
app.use((err, req, res, next) => {
    console.error("Error:", err);
    if (err.name === "CloudinaryError") {
        return res.status(500).json({
            success: false,
            message: "Image upload failed",
            error: err.message
        });
    }
    next(err);
});

// Initialize services before starting the server
initializeServices().then(() => {
    const server = app.listen(port, () => {
        console.log(`✅ Server running on port ${port}`);
    });
});
=======
const server = app.listen(port, () => console.log(`Server started on PORT:${port}`))
>>>>>>> origin/main

export default app