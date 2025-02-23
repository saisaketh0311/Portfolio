import React, { useEffect, useState, useRef } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/logo-2.png";

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(netflixSound);
    audioRef.current.load(); // Preload audio
  }, []);

  const handlePlaySound = () => {
    if (isClicked) return; // Prevent multiple triggers
    setIsClicked(true); // Instantly apply animation class

    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Ensure playback starts from the beginning
      audioRef.current.play().catch((err) => console.error("Audio play error:", err));
    }

    // Ensure animation, sound, and navigation are perfectly timed
    requestAnimationFrame(() => {
      setTimeout(() => navigate("/browse"), 3300); // Adjusted for perfect sync
    });
  };

  return (
    <div className="netflix-container" onPointerDown={handlePlaySound}>
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? "animate" : ""}`}
      />
    </div>
  );
};

export default NetflixTitle;
