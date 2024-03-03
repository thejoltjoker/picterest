import ImageGrid from "../components/ImageGrid";
import { useFavoritesContext } from "../contexts/FavoritesContext";

const SavedPage = () => {
  const { favorites } = useFavoritesContext();

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
