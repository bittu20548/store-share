import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../component/button";
import Input from "../input";
export default function Signup() {
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleSignup() {
        try {
            const response = await axios.post("http://localhost:4000/api/v1/signup", {
                Username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            alert("Account created successfully!");
            navigate("/dashboard");
        }
        catch (error) {
            alert("User already exists");
            console.log(error);
        }
    }
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "w-[380px] bg-white rounded-xl shadow-lg p-8", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-8", children: "Create Account" }), _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { placeholder: "Username", value: Username, onChange: (e) => setUsername(e.target.value) }), _jsx(Input, { placeholder: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx(Button, { text: "Sign Up", fullWidth: true, onClick: handleSignup })] }), _jsxs("p", { className: "text-center mt-6", children: ["Already have an account?", " ", _jsx(Link, { to: "/signin", className: "text-purple-600 font-semibold", children: "Sign In" })] })] }) }));
}
//# sourceMappingURL=signup.js.map