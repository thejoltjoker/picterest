/* eslint-disable react-refresh/only-export-components */
import { withAuthenticationRequired } from "@auth0/auth0-react";
import ImageGrid from "../components/ImageGrid";
import PageLoading from "../components/PageLoading";
import { useFavoritesContext } from "../contexts/FavoritesContext";

const SavedPage = () => {
  const { favorites } = useFavoritesContext();
  // const { user } = useAuth0();
  // useEffect(() => {
  //   let ignore = false;

  //   const fetchFavorites = async () => {
  //     if (user?.sub) {
  //       const response = getFavorites(Md5.hashStr(user.sub));
  //     }
  //   };
  //   return () => {
  //     ignore = true;
  //   };
  // });

  return (
    <div className="flex">
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

export default withAuthenticationRequired(SavedPage, {
  onRedirecting: () => <PageLoading />,
});
