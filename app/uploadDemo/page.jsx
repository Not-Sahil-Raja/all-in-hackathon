import React from "react";
import uploadImage from "@/lib/formaction.js";
import cloudinary from "@/lib/cloudinaryconfig.js";
import axios from "axios";

const UploadDemo = async () => {
  const { resources: photos } = await cloudinary.api.resources_by_tag(
    "photos",
    { context: true }
  );
  const uploadImagefunc = async (formData) => {
    "use server";
    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageData = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["photos"],
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    console.log(imageData);
  };

  return (
    <div className="h-[100%] w-[100%] flex flex-col justify-center items-center gap-4">
      <form action={uploadImagefunc}>
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
      {photos &&
        photos.map((photo) => <img src={photo.secure_url} className="h-32" />)}
    </div>
  );
};

export default UploadDemo;
