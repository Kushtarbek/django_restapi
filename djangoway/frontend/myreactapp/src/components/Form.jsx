import React, { useState } from "react";

export default function Form() {
  const [fortData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form
      type="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      action={"https://questions.greatfrontend.com/api/questions/contact-form"}
      method="POST"
    >
      <div>
        <label htmlFor="email-input">Email</label>
        <input type="email" alt="email" name="email" />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="name" alt="name" name="name" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input type="text" alt="text" name="message" />
      </div>
    </form>
  );
}
