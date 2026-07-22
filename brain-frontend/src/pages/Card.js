import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Card({ title, type, link }) {
    return (_jsxs("div", { className: "bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition", children: [_jsx("h2", { className: "text-xl font-bold mb-3", children: title }), _jsxs("p", { className: "text-sm text-gray-500 mb-2", children: ["Type: ", _jsx("span", { className: "font-medium", children: type })] }), _jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline break-all", children: link })] }));
}
//# sourceMappingURL=Card.js.map