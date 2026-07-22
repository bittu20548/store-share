import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../component/button";
import Card from "./Card";
import AddContentModal from "./AddContentModal";
export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [contents, setContents] = useState([]);
    async function fetchContent() {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:4000/api/v1/content", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setContents(response.data.content);
        }
        catch (error) {
            console.log(error);
            alert("Failed to fetch content");
        }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => {
        fetchContent();
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 p-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Brainly Dashboard" }), _jsx(Button, { text: "Add Content", onClick: () => setOpen(true) }), open && (_jsx(AddContentModal, { open: open, onClose: () => setOpen(false), onSuccess: fetchContent }))] }), contents.length === 0 ? (_jsx("p", { className: "text-gray-500", children: "No content found." })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: contents.map((item) => (_jsx(Card, { title: item.title, type: item.type, link: item.link }, item._id))) }))] }));
}
//# sourceMappingURL=Dashboard.js.map