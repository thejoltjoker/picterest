interface InputTextFieldProps {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const InputTextField = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  className,
  disabled = false,
}: InputTextFieldProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.value)}
      className={`z-0 h-12 w-full grow rounded-full border-2 border-zinc-300 px-4 placeholder:text-stone-400 focus:border-slate-500 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-stone-500 dark:bg-zinc-700 dark:text-stone-100 md:mb-0 ${className}`}
    />
  );
};

export default InputTextField;
