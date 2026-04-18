
import { FaShieldAlt } from "react-icons/fa";
import LoginBtn from "@/features/auth/components/LoginBtn";

function App() {
  const handleLogin = () => {
    alert("Login button clicked!");
  };

  return (
    <div className="h-svh min-h-fit w-full bg-neut-50 flex flex-col items-center gap-8 p-8">
      <h1 className="text-black">Test your components below</h1>
      <div className="w-full max-w-md">
        <LoginBtn btnIcon={<FaShieldAlt />} onClick={handleLogin} />
      </div>
    </div>
  );
}

export default App;
