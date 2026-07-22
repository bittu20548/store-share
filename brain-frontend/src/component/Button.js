import { jsx as _jsx } from "react/jsx-runtime";
export default function Button({ text, onClick, variant = "primary", fullWidth = false, }) {
    return (_jsx("button", { onClick: onClick, className: `
        px-4
        py-2
        rounded-lg
        font-semibold
        transition
        duration-200
        ${variant === "primary"
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-200 text-black hover:bg-gray-300"}
        ${fullWidth ? "w-full" : ""}
      `, children: text }));
}
//# sourceMappingURL=Button.js.map