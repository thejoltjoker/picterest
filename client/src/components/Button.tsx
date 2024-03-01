import { ReactNode } from "react";

type Props = { children: ReactNode; disabled: boolean };

const Button = ({ children, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      className="h-12 rounded-full border border-blue-600 bg-blue-500 px-6 tracking-wide text-white transition hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
