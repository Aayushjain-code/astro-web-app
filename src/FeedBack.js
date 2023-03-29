import React, { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "50vw",
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  feedbackInput: {
    width: "80%", // update the width
    height: 100,
    paddingTop: 10,
    textAlignVertical: "top",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  thankYou: {
    fontSize: 20,
    marginTop: 20,
    color: "green",
    textAlign: "center",
  },
  button: {
    // add button style
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

const FeedBack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      alert("Validation Error", "Please fill in all the fields");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Validation Error", "Please enter a valid email address");
      return;
    }
    const message = `Thank you ${name} for your feedback!`;
    setThankYouMessage(message);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.heading}>Feedback Form</h1>
        <input
          style={styles.input}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <textarea
          style={styles.feedbackInput}
          placeholder="Feedback"
          onChange={(e) => setFeedback(e.target.value)}
          value={feedback}
          rows={4}
        />
        <button style={styles.button} onClick={handleSubmit}>
          Submit
        </button>
        {thankYouMessage ? (
          <p style={styles.thankYou}>{thankYouMessage}</p>
        ) : null}
      </div>
    </div>
  );
};

export default FeedBack;
