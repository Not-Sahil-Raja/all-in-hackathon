"use server";

import cloudinary from "@/lib/cloudinaryconfig.js";

const uploadImage = async (buffer) => {
  // const arrayBuffer = await file.arrayBuffer();
  //const buffer = new Uint8Array(arrayBuffer);
  const imageData = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });
};

export default uploadImage;
