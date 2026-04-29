import React, { useState } from "react";
import { LuLock, LuBriefcaseMedical } from "react-icons/lu";

import InputWithLabel from "@/components/InputWithLabel";
import LoginBtn from "./LoginBtn";

function LoginCard() {
  const [medicalIdOrEmail, setMedicalIdOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log("Login attempt:", { medicalIdOrEmail, password });
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">Doctor's Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputWithLabel
          id="medicalIdOrEmail"
          label="Medical ID or Email"
          placeholder="MD-7728-449"
          value={medicalIdOrEmail}
          onChange={(e) => setMedicalIdOrEmail(e.target.value)}
          inputIcon={<LuBriefcaseMedical />}
        />

        <InputWithLabel
          id="password"
          label="Password"
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputIcon={<LuLock />}
        />

        <div className="mt-6">
          <LoginBtn className="h-12" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
