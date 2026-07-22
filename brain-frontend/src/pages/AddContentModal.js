import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import Button from "../component/button";
import Input from "../input";
export default function AddContentModal({ open, onClose, onSuccess, }) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    async function addContent() {
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:4000/api/v1/content", {
                title,
                link,
                type,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("Content Added!");
            setTitle("");
            setLink("");
            setType("");
            onSuccess();
            onClose();
        }
        catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    }
    if (!open)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black/50 flex justify-center items-center", children: _jsxs("div", { className: "bg-white w-[400px] rounded-xl p-6 shadow-lg", children: [_jsx("h2", { className: "text-2xl font-bold mb-5", children: "Add Content" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx(Input, { placeholder: "Link", value: link, onChange: (e) => setLink(e.target.value) }), _jsx(Input, { placeholder: "Type (youtube/twitter)", value: type, onChange: (e) => setType(e.target.value) }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { text: "Add", onClick: addContent, fullWidth: true }), _jsx(Button, { text: "Cancel", variant: "secondary", onClick: onClose, fullWidth: true })] })] })] }) }));
}
//# sourceMappingURL=AddContentModal.js.map