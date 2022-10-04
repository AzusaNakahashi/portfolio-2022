import Image from "next/image";
import React, { useState } from "react";
import contactImg from "../public/illustration/contact-img.svg";
import styles from "../styles/contact.module.scss";

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
    setStatus("Sending...");
    let details = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    let response = await fetch("http://localhost:5000/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    if (response.status === 200) {
      setStatus("Message successfully sent!");
    } else {
      setStatus("ERROR!");
    }
  };

  return (
    <div className={styles["contact"]} id="contact">
      <h2>Contact</h2>
      <div className={styles["container"]}>
        <div className={styles["explanation"]}>
          <div className={styles["text-effect"]}>
            <div className={styles["container"]}>
              <h3
                className={styles["glitch"]}
                data-text="I'd love to hear from you"
              >
                I&apos;d <span className={styles["hightlight-pink"]}>love</span>{" "}
                to hear from{" "}
                <span className={styles["hightlight-blue"]}>you</span>!
              </h3>
              <div className={styles["glow"]}>
                I&apos;d love to hear from you!
              </div>
            </div>
            <div className={styles["scanlines"]}></div>
          </div>
          <div className={styles["mail-img"]}>
            <Image src={contactImg} alt="mail image" />
          </div>
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
              required
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
