import React from "react";
import { useNavigate } from "react-router-dom";

// Import state
import { useWallet } from "../state";

export default function LoginPage() {
  const { wallet, signedAccountId } = useWallet();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (signedAccountId) {
      navigate("/");
    }
  }, [signedAccountId]);

  const handleSignIn = () => {
    try {
      wallet.signIn();
    } catch (e) {
      console.error("Wallet not configured properly");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-600 text-white transition-all hover:bg-blue-700 focus:scale-95"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
