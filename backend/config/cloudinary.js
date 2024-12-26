import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    try {
        // Configure cloudinary
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
            secure: true
        });

        // Verify the configuration by making a test API call
        const testResult = await cloudinary.api.ping();
        if (testResult.status === 'ok') {
            console.log("✅ Cloudinary Connected");
            return true;
        }
    } catch (error) {
        console.error("❌ Cloudinary Connection Error:", error.message);
        throw error;
    }
}

export { cloudinary, connectCloudinary as default };