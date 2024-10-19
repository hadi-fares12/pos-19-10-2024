import React, { useEffect } from "react";
import { Button } from "@mui/material"; // Assuming you're using Material-UI
import { useNavigate } from "react-router-dom";
import logoVideo from './logovideo.mp4'; // Correct way to import the video

const WelcomePage = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes
  const v = "pointofsale";

  // useEffect to handle navigation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${v}/PoS`);
    }, 7000); // 7 seconds delay

    // Cleanup the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigate, v]);

  return (
    <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <video
        src={logoVideo}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          // maxWidth: "600px", // Set maximum width for smaller screens
          // height: "100%",
        }}
      />
    </div>
  );
};

export default WelcomePage;
