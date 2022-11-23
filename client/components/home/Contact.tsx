import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { postForm } from "../../features/form";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/layout/contact.module.scss";

const Contact = () => {
  const formStatus = useAppSelector((state) => state.form.status);
  const dispatch = useAppDispatch();
  const [statusMessage, setStatusMessage] = useState("");
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [headingRef, headingIsVisible] = useInView({
    threshold: 0.2,
    //triggerOnce: true,
  });
  const [neonRef, neonIsVisible] = useInView();
  const [messageRef, messageIsVisible] = useInView();

  const showFormStatusMessage = (formSendingStatus: string) => {
    switch (formSendingStatus) {
      case "IDLE":
        setStatusMessage("");
        break;
      case "PENDING":
        setStatusMessage("Sending...");
        break;
      case "SUCCESS":
        setStatusMessage("Message successfully sent!");
        break;
      case "REJECTED":
        setStatusMessage("Oops! Something went wrong. Please try again later");
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = {
      name: formInput.name,
      email: formInput.email,
      subject: formInput.subject,
      message: formInput.message,
    };
    dispatch(postForm(formData));
    setFormInput({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    showFormStatusMessage(formStatus);
  }, [formStatus]);

  return (
    <div ref={headingRef} className={styles["contact"]} id="contact">
      <div className={styles["content-wrapper"]}>
        <h2
          className={`${styles["section-title"]} ${
            headingIsVisible && styles.animated
          }`}
        >
          Contact
        </h2>
        <div className={styles["grid-wrapper"]}>
          <div className={styles["thanks-message"]}>
            <div className={styles["text-effect"]}>
              <div className={styles["scanlines"]}></div>
            </div>
            <div
              ref={neonRef}
              className={`${styles["image-wrapper"]} ${
                neonIsVisible && styles.animated
              }`}
            >
              <picture>
                <img
                  className={styles["neon-sign"]}
                  src={"/illustration/contact-neon-sign.svg"}
                  alt="I'd love to hear from you"
                />
              </picture>
            </div>
            <div className={styles["text"]}>
              <p
                ref={messageRef}
                className={`${messageIsVisible && styles.animated}`}
              >
                Feel free to ask me any questions or share with me your opinions
                about my website, or any words of wisdom or encouragement or a
                job offer maybe...
              </p>
              <p className={`${messageIsVisible && styles.animated}`}>
                Thank you for your time!
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} method="POST" action="send">
            <div>
              <label htmlFor="name">
                Name:<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formInput.name}
                onChange={(e) =>
                  setFormInput({ ...formInput, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="email">
                Email:<span>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formInput.email}
                onChange={(e) =>
                  setFormInput({ ...formInput, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="subject">
                Subject:<span>*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formInput.subject}
                onChange={(e) =>
                  setFormInput({ ...formInput, subject: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="message">
                Message:<span>*</span>
              </label>
              <textarea
                id="message"
                value={formInput.message}
                onChange={(e) =>
                  setFormInput({ ...formInput, message: e.target.value })
                }
                required
              />
              <p className={styles["require-message"]}>
                <span>*</span>
                {" required"}
              </p>
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
