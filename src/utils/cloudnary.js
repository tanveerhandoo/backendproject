import {v2} from 'cloudiary' 
import fs from 'fs'
import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET,
    });  

    const uploadOnCloudinary= async (localFilePath)=>{
        try {
            if (!localFilePath) return null
        // upload file
       const response =await cloudinary.uploader.upload(localFilePath,
            {
                resource_type:"auto"
            }
        )
        //file has been uploaded
        console.log(response.url,"file is uploaded on cloudinary")
        return response;
            } catch (error) {
            fs.unlinkSync(localFilePath)
 //remove the locally saved file as the operation has failed
            return null;
        }
    }
 
    export {uploadOnCloudinary} 
    
