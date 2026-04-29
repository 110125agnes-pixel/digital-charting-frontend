import React, { useState } from "react";
import { FaUserMd, FaLock } from "react-icons/fa";

import InputWithLabel from "@/components/InputWithLabel";
import LoginBtn from "./LoginBtn";

function LoginCard() {
  const [medicalIdOrEmail, setMedicalIdOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // TODO: wire up real auth - currently logs credentials
    // eslint-disable-next-line no-console
    console.log("Login attempt:", { medicalIdOrEmail, password });
  };

  return (
    <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Doctor's Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputWithLabel
          id="medicalIdOrEmail"
          label="Medical ID or Email"
          placeholder="MD-7728-449"
          value={medicalIdOrEmail}
          onChange={(e) => setMedicalIdOrEmail(e.target.value)}
          inputIcon={<FaUserMd />}
        />

        <InputWithLabel
          id="password"
          label="Password"
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputIcon={<FaLock />}
        />

        <div className="mt-6">
          <LoginBtn className="h-12" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
