import { FaCameraRetro } from "react-icons/fa6";

type LogotypeProps = {
  size?: string;
};

const Logotype = ({ size = "6xl" }: LogotypeProps) => {
  return (
    <div
      className={`flex items-center text-center font-heading font-bold text-${size} dark:text-stone-100`}
    >
      <FaCameraRetro className="text-theme-400" />
      <h1 className="ms-3">Picterest</h1>
    </div>
  );
};

export default Logotype;
