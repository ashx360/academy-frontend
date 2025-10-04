import { useEffect, useState } from "react";
import Navbar from "../components/navbar"; 
import MainPage from "../components/main_page";

function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 3000);
    const timer2 = setTimeout(() => setShowIntro(false), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {showIntro && (
        <div
          id="intro"
          className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center">
            <h1 className="text-white text-9xl  font-black font-helvetica-glow italic mb-6">
              Ash
            </h1>
<div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
  <div className="h-full bg-white animate-loading shadow-[0_0_8px_white,0_0_16px_white]"></div>
</div>
  </div>
</div>
      )}

      {!showIntro && (
        <>
          <Navbar />
          <MainPage />
          </>
      )}
    </>
  );
}

export default LandingPage;
