import React, { useState } from "react";
import InputWithLabel from "@/components/InputWithLabel";

function App() {
  const [value, setValue] = useState("MD-7728-449");

  return (
    <div className="flex h-svh min-h-fit w-full flex-col items-center gap-8 bg-neut-50 p-8">
      <h1 className="text-black">Test your components below</h1>

      <div className="w-full max-w-xl">
        <InputWithLabel
          id="medical-id"
          label="Medical ID or Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputIcon={
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <path d="M8 12h8M12 8v8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default App;
