import { error } from "console";
import Image from "next/image";
import React, { useState } from "react";
import contactImg from "../public/illustration/contact-img.svg";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setStatus("Sending...");
    let details = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    let response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Message successfully sent!");
    let result = await response.json();
    console.log(result);
    alert(result.status);
  };
  return (
    <div>
      <h2>Contact</h2>
      <div>
        <div>
          <Image src={contactImg} alt="mail image" />
          <h3>I&apos;d love to hear from you!</h3>
          <p>
            Feel free to ask me any questions or share with me your opinions
            about my website, or any words of wisdom or encouragement or a job
            offer maybe...
          </p>
          <p>Thank you for your time!</p>
        </div>
        <form onSubmit={handleSubmit} method="POST" action="send">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Submit</button>
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
