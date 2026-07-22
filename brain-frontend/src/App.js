import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
function App() {
    const token = localStorage.getItem("token");
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/signin", element: !token ? _jsx(Signin, {}) : _jsx(Navigate, { to: "/dashboard" }) }), _jsx(Route, { path: "/signup", element: !token ? _jsx(Signup, {}) : _jsx(Navigate, { to: "/dashboard" }) }), _jsx(Route, { path: "/dashboard", element: token ? _jsx(Dashboard, {}) : _jsx(Navigate, { to: "/signin" }) }), _jsx(Route, { path: "/", element: _jsx(Navigate, { to: token ? "/dashboard" : "/signin" }) })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map