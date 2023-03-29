import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePress = () => {
    navigate("/Calculator");
  };

  const styles = {
    outerContainer: {
      flex: 1,
      backgroundColor: "#f9f9f9", // light color for the outer body
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 16,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      width: "50%",
      height: "50%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    containerHovered: {
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    button: {
      backgroundColor: "#007AFF",
      borderRadius: 8,
      padding: "16px 32px",
      border: "none",
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div
        style={{
          ...styles.container,
          ...(isHovered && styles.containerHovered),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p style={styles.text}>
          Get ready to crunch some numbers! Our calculator is the perfect tool
          for all your mathematical needs.
        </p>
        <button style={styles.button} onClick={handlePress}>
          Press Me
        </button>
      </div>
    </div>
  );
};

export default Home;
