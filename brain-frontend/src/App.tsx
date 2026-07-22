import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/signin"
          element={!token ? <Signin /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/dashboard" />}
        />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/signin" />}
        />

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to={token ? "/dashboard" : "/signin"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;