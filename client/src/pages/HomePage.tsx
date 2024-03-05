import { FaCameraRetro } from "react-icons/fa6";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SignInButton from "../components/SignInButton";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="flex h-5/6 flex-col items-center justify-center gap-4 sm:-ml-64">
      {/* {images && <ImageGrid images={images} />} */}
      <span className="flex rounded-lg p-2 text-center font-heading text-6xl font-bold hover:bg-stone-100">
        <FaCameraRetro className="text-theme-400 -mt-[2px]" />
        <h1 className="ms-3">Picterest</h1>
      </span>
      <p className="text-lg text-stone-600">
        Discover the world through images with our powerful search engine.
        <br />
        Unleash your curiosity, find inspiration, and explore visually with
        ease.
      </p>
      {isAuthenticated ? (
        <Button onClick={() => navigate("/search")}>Search</Button>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default HomePage;
