import { jsx as _jsx } from "react/jsx-runtime";
export default function Input({ placeholder, type = "text", value, onChange, }) {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, className: "\n        w-full\n        px-4\n        py-2\n        border\n        border-gray-300\n        rounded-lg\n        outline-none\n        focus:border-purple-600\n        focus:ring-2\n        focus:ring-purple-200\n      " }));
}
//# sourceMappingURL=input.js.map