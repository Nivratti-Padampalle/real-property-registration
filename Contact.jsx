import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully ✅");

        // clear form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server not responding");
    }
  }

  return (
    <div className="contact-container">

      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding property registration,
          documentation, or application status, feel free to contact us.
        </p>
      </div>

      <div className="contact-main">

        {/* LEFT */}
        <div className="contact-info">
          <h3>📍 Office Address</h3>
          <p>Sub-Registrar Office, Maharashtra</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>✉️ Email</h3>
          <p>support@propertyregistration.gov.in</p>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <textarea
              placeholder="Write your message here..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
