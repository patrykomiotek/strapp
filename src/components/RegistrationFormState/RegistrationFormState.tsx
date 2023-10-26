import React, { FormEventHandler, useState } from "react";
import { Button, Text } from "../../ui";

export const RegistrationFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({
      email,
      password,
      language,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          E-mail: {email}, Password: {password}
        </p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          onChange={(event) => setLanguage(event.target.value)}
          value={language}
        />
      </div>
      <Button onClick={() => null}>Submit</Button>
    </form>
  );
};
