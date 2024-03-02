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
      className="h-12 rounded-full border border-blue-600 bg-blue-500 px-6 tracking-wide text-white transition hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
