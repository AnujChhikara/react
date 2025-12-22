import { useState } from "react";
import { useViewport } from "./hooks/use-screen-viewport";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { width, height, isKeyboardVisible } = useViewport();

  const handleVerify = () => {
    if (phoneNumber.trim()) {
      console.log("Verifying phone number:", phoneNumber);
    }
  };

  return (
    <div
      className="login-container"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="input-section">
        <input
          type="tel"
          className="phone-input"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          maxLength={15}
        />
        <p className="keyboard-visible-text">
          Is Keyboard Visible: {isKeyboardVisible.toString()}
        </p>
      </div>

      <div className="button-section">
        <button
          className="verify-button"
          onClick={handleVerify}
          disabled={!phoneNumber.trim()}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default App;
