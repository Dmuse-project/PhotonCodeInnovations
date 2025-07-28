"use client";
import { useState } from "react";

export default function contactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", number:"" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending...");

    // const res = await fetch("/contact/send", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    const res = await fetch("/contacts/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});


    const result = await res.json();

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "", number: "", });
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form__typography">
              <h2>Get In Touch</h2>
              <p>
                If you’d like to discuss a project, collaborate, or just say
                hello, feel free to drop a message below.
              </p>
            </div>

            <div className="contact__form__groups">
              <div className="Contact__form__group">
                <input
                  id="name"
                  className="contact__form__group__input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name "
                  required
                />
                <label htmlFor="name" className="contact__form__group__label">
                  Full name
                </label>
              </div>
              <div className="contact__form__group">
                <input
                  id="email"
                  className="contact__form__group__input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <label htmlFor="email" className="contact__form__group__label">
                  Email
                </label>
              </div>
              <div className="contact__form__group">
                <input
                  id="number"
                  className="contact__form__group__input"
                  type="number"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Whats'App Line"
                  required
                />
                <label htmlFor="number" className="contact__form__group__label">
                  WhatsApp Number
                </label>
              </div>
              <div className="contact__form__group">
                <textarea
                  id="message"
                  className="contact__form__group__input"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="contact__form__group__label"
                >
                  message
                </label>
              </div>
            </div>
            <button type="submit" className="contact__form__button">
              Send Message
            </button>
            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
