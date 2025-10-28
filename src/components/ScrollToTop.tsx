// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This runs BEFORE the browser paints → page starts at top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Optional: Smooth scroll (feels cute)
    // window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}