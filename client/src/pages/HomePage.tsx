import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";
import SignInButton from "../components/SidebarSignIn";
import { ImageItem } from "../models/ImageItem";

const HomePage = () => {
  const [images, setImages] = useState<ImageItem[]>();

  return (
    <div className="flex h-5/6 flex-col items-center justify-center gap-4">
      {/* {images && <ImageGrid images={images} />} */}
      <span className="flex rounded-lg p-2 text-center font-heading text-6xl font-bold hover:bg-stone-100">
        <FaCameraRetro className="text-theme-400 -mt-[4px]" />
        <h1 className="ms-3">Picterest</h1>
      </span>
      <p className="text-lg text-stone-600">
        Discover the world through images with our powerful search engine.
        <br />
        Unleash your curiosity, find inspiration, and explore visually with
        ease.
      </p>
      <SignInButton />
    </div>
  );
};

export default HomePage;
