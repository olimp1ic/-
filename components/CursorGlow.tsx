"use client";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const el = document.createElement("div");
    el.className = "cursor-glow";
    document.body.appendChild(el);
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (document.body.contains(el)) document.body.removeChild(el);
    };
  }, []);
  return null;
}
