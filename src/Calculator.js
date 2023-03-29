import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Calculator() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("");

  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "rgb(220, 220, 220)",
    light2: "#F7F7F7",
  };

  const calculate = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      setResult(result + title);
    }
  };

  const Btn = ({ title, type }) => (
    <button
      onClick={() => calculate(title)}
      style={{
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 40,
        width: 50,
        borderRadius: 10,
        margin: 16,
        padding: 1,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
      }}
    >
      <span
        style={{
          fontSize: 27,
          textAlign: "center",
          lineHeight: "40px",
          color: getBtnColor(type),
        }}
      >
        {title}
      </span>
    </button>
  );

  const getBtnColor = (type) => {
    if (type == "top") {
      return "#35FBD6";
    } else if (type == "right") {
      return "#EB6363";
    }
    return getColor(colors.dark, colors.light);
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "20px 0",
        backgroundColor: getColor(colors.light, colors.dark),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={styles.btnGroup}>
        <button style={styles.button} onClick={() => navigate("/")}>
          Back
        </button>
        <button style={styles.button} onClick={() => navigate("/feedback")}>
          FeedBack Form
        </button>
      </div>
      <label style={{ color: getColor(colors.dark, colors.light) }}>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={() => setDarkTheme(!darkTheme)}
          style={{ marginRight: 10 }}
        />
        Dark Theme
      </label>
      <div
        style={{
          fontSize: 40,
          width: 380,
          textAlign: "right",
          paddingRight: 20,
          backgroundColor: getColor(colors.light1, colors.dark1),
          color: getColor(colors.dark, colors.light),
          marginTop: 160,
          //   marginRight: 160,
          paddingBottom: 20,
        }}
      >
        {result}
      </div>
      <div
        style={{
          width: 400,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: getColor(colors.light1, colors.dark1),
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          //   borderTopLeftRadius: 20,
          //   borderTopRightRadius: 20,
        }}
      >
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="+" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="-" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </div>
    </div>
  );
}
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
  btnGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
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
