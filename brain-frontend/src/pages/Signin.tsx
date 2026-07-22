import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Button from "../component/Button";
import Input from "../input";

export default function Signin() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignin() {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/signin",
        {
          Username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!")

      window.location.href="/dashboard";
    } catch (error) {
      alert("Invalid Username or Password");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[380px] bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Brainly Login
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
            text="Sign In"
            fullWidth
            onClick={handleSignin}
          />
        </div>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}