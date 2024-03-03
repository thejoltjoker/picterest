import axios from "axios";
import { useEffect, useState } from "react";
import ImageGrid from "../components/ImageGrid";
import { ImageItem } from "../models/ImageItem";
import { User } from "../models/User";
import { useUserContext } from "../contexts/UserContext";

const SavedPage = () => {
  const [images, setImages] = useState<ImageItem[]>();
  const { user, dispatch } = useUserContext();

  

  return (
    <div className="flex">
      <div className="max-w-1/4 h-full border border-green-400">
        <p className="text-2xl">{user && user.email}</p>
      </div>
      <div className="grow">
        {images ? (
          <ImageGrid images={images} />
        ) : (
          <p className="text-center text-slate-500">No images saved.</p>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
