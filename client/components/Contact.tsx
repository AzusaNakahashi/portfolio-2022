import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../pages/app/hooks";
import contactImg from "../public/illustration/contact-img.svg";
import styles from "../styles/contact.module.scss";
import { postForm } from "../features/form";

const Contact = () => {
  const formStatus = useAppSelector((state) => state.form.status);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState("IDLE");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const showFormStatus = (formStatus: string) => {
    switch (formStatus) {
      case "IDLE":
        setStatusMessage("");
        break;
      case "PENDING":
        setStatusMessage("Sending...");
        break;
      case "SUCCEEDED":
        setStatusMessage("Message successfully sent!");
        break;
      case "FAILED":
        setStatusMessage("Oops! Something went wrong. Please try again later");
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("PENDING");
    let details = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    dispatch(postForm(details));
    /*
    if (response.status === 200) {
      setStatus("SUCCEEDED");
    } else {
      setStatus("FAILED");
    }*/
  };

  useEffect(() => {
    showFormStatus(status);
  }, [status, formStatus]);

  return (
    <div className={styles["contact"]} id="contact">
      <div className={styles["content-wrapper"]}>
        <h2>Contact</h2>
        <h3>{formStatus}</h3>
        <div className={styles["grid-wrapper"]}>
          <div className={styles["thanks-message"]}>
            <div className={styles["text-effect"]}>
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
            <p className={styles["status-message"]}>{statusMessage}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
