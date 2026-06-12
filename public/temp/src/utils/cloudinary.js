import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (localfilePath) => {
    try{
        if(!localfilePath) return null;
        // Upload the file to Cloudinary
        cloudinary.uploader.upload(localFilepath,{
            resource_type: "auto",
        })
        //file has been uploaded sucessfully
        console.log("File uploaded to Cloudinary successfully", response.url);
        return response.url;
    } catch (error) {
        fs.unlinkSync(localfilePath); //remove the locally saved temporary file as the upload operation got failed
        console.error("Error uploading file to Cloudinary", error);
        return null;
    }
}

export {uploadToCloudinary}