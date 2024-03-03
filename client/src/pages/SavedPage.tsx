import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { ImageItem } from "../models/ImageItem";

const SavedPage = () => {
  const [images, setImages] = useState<ImageItem[]>();
  const { favorites, dispatch } = useFavoritesContext();

  return (
    <div className="flex">
      <div className="max-w-1/4 h-full border border-green-400"></div>
      <div className="grow">
        {favorites ? (
          <ImageGrid images={favorites} />
        ) : (
          <p className="text-center text-slate-500">No images saved.</p>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
