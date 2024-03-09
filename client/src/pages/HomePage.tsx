import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logotype from "../components/Logotype";
import SignInButton from "../components/SignInButton";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center gap-4 xl:-ml-64">
      {/* {images && <ImageGrid images={images} />} */}
      <Logotype size="4xl" />
      <p className="text-center text-lg text-stone-600 dark:text-stone-300">
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
