import React, { useState } from "react";
import axios from "axios";

const url =
  "http://localhost:8080/developement/wp_headless_react-test/wp-json/contact-form-7/v1/contact-forms/79/feedback";

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    messageSent: "",
    //errorMessage: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.set("your-name", contact.name);
    formData.set("your-email", contact.email);
    formData.set("your-subject", contact.subject);
    formData.set("your-message", contact.message);

    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "mail_sent") {
          setContact({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <article className="form-container">
        <form action="POST" onSubmit={handleSubmit} className="form-body">
          <div className="form-input-container">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contact.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="subject"> Subject: </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={contact.subject}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              id="message"
              value={contact.message}
              onChange={onChangeHandler}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </article>
    </>
  );
};
