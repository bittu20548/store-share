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
    try { const response=
      await axios.post("http://localhost:4000/api/v1/signup", {
        Username,
        password,
      });
      localStorage.setItem("token",response.data.token);

      alert("Account created successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert("User already exists");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[380px] bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <div className="space-y-4">
          <Input
            placeholder="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Sign Up"
            fullWidth
            onClick={handleSignup}
          />
        </div>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-purple-600 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}