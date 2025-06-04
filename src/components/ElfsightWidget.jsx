"use client"; // If using Next.js App Router (for Next.js 13+)

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"; // Replace with your actual Elfsight script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="elfsight-app-241c2b24-46f2-47c7-8eb7-3f7cb2f62037" data-elfsight-app-lazy></div> // Replace with the appropriate div if needed
};

export default ElfsightWidget;
