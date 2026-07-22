type InputProps = {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-lg
        outline-none
        focus:border-purple-600
        focus:ring-2
        focus:ring-purple-200
      "
    />
  );
}