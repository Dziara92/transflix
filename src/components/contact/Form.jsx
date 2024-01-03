/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ isActive }) => {
  const form = useRef();
  const [dataForm, setDataForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const offEmailSuccess = () => {
    setTimeout(() => {
      setEmailSuccess(false);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errorValid = {};

    if (!dataForm.user_name.trim()) {
      errorValid.name = "Proszę podać Imię lub nazwę firmy.";
      errorValid.engName = "Please enter your name or company name.";
    }
    if (!dataForm.user_email.trim()) {
      errorValid.email = "Proszę wpisać Email.";
      errorValid.engEmail = "Please enter Email.";
    } else if (!/\S+@\S+\.\S+/.test(dataForm.user_email)) {
      errorValid.email = "Email jest nie poprawny.";
      errorValid.email = "The email is incorrect.";
    }
    if (!dataForm.message) {
      errorValid.message = "Wiadomość nie może być pusta.";
      errorValid.engMessage = "The message cannot be empty.";
    }
    setError(errorValid);

    if (Object.keys(errorValid).length === 0) {
      emailjs
        .sendForm(
          "service_zpeq14i",
          "template_x85rtld",
          form.current,
          import.meta.env.VITE_API_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setEmailSuccess(true);
              setError({});
              setDataForm({ user_name: "", user_email: "", message: "" });
              offEmailSuccess();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form className="form__contact" ref={form} onSubmit={sendEmail}>
      <h3 className="form__title">
        {isActive ? "Formularz kontaktowy" : "Contact form"}
      </h3>
      <label htmlFor="name">
        {isActive ? "Imię / Firma" : "Name / Company:"}
      </label>
      {error && (
        <p className="error__message">
          {isActive ? error.name : error.engName}
        </p>
      )}
      <input
        type="text"
        name="user_name"
        value={dataForm.user_name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      {error && (
        <p className="error__message">
          {isActive ? error.email : error.engEmail}
        </p>
      )}
      <input
        type="text"
        name="user_email"
        value={dataForm.user_email}
        onChange={handleChange}
      />
      <label htmlFor="message">{isActive ? "Wiadomość:" : "Message:"}</label>
      {error && (
        <p className="error__message">
          {isActive ? error.message : error.engMessage}
        </p>
      )}
      <textarea
        cols="30"
        rows="10"
        name="message"
        value={dataForm.message}
        onChange={handleChange}
      ></textarea>
      <button className="form__btn">{isActive ? "Wyślij" : "Send"}</button>
      {emailSuccess && (
        <div className="form__message__success">
          <p className="form__success">
            {isActive ? "Wiadomość została wysłana" : "Message was sent"}
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;
