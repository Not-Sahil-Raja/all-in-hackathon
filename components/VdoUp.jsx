import { useState } from "react";
import axios from "axios";
import { Image, Video } from "cloudinary-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const { user } = useUser();

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "niimop0w");
    console.log(selectedImages);
    // Replace YOUR_UPLOAD_PRESET with your cloudinary upload_preset which looks something like this: sdfmpeitro

    const postImage = async () => {
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dvvdnknyw/video/upload`,
          formData
          // Replace YOUR_CLOUD_NAME with your cloudName which you can find in your Dashboard
        );
        setImageData(await response.data);
        console.log(imageData);
        const newImageData = {
          image_url: response.data.secure_url,
          image_name: imageName,
          image_description: imageDescription,
          image_user: user,
        };
        await axios.post("/api/newImage", newImageData);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };

  return (
    <>
      <div className="wrapper bg-[#bbbbbb38] py-5 rounded-lg w-2/3 gap-5 flex flex-col justify-around items-center ">
        <h1 className="header font-semibold text-2xl">
          Upload and Share Your Video
        </h1>
        <article className="flex flex-col justify-center items-center gap-5">
          <Input
            type="text"
            value={imageName}
            placeholder="Add Video Title"
            onChange={(e) => setImageName(e.target.value)}
          />
          <Input
            type="text"
            value={imageDescription}
            placeholder="Add Short Description"
            onChange={(e) => setImageDescription(e.target.value)}
          />
          <Input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setSelectedImages(e.target.files[0])}
            className="input"
          />

          <Button onClick={uploadImage} className="button mt-9">
            Post Video
          </Button>
        </article>

        <article className="image-container">
          {imageData && (
            <Video
              cloudName="dvvdnknyw"
              publicId={`https://res.cloudinary.com/dvvdnknyw/video/upload/v1649427526/${imageData.public_id}`}
              className="h-24"
              // Replace YOUR_CLOUD_NAME with your cloudName which you can find in your Dashboard. NOTE: Your publicId link might be different.
            />
          )}
        </article>
      </div>
    </>
  );
}
