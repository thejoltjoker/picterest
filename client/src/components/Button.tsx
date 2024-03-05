import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="bg-theme-400 hover:bg-theme-600 border-theme-600 h-12 rounded-full border stroke-0 px-6 tracking-wide text-white ring-0 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
