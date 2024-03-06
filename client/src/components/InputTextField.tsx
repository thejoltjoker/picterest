interface InputTextFieldProps {
  name?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputTextField = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}: InputTextFieldProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className={`z-0 h-12 w-full grow rounded-full border-2 border-slate-300 px-4 placeholder:text-stone-400 focus:border-slate-500 focus:outline-none focus:ring-0 focus:ring-offset-0 md:mb-0`}
    />
  );
};

export default InputTextField;
