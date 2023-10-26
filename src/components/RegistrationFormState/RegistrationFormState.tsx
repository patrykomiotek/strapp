import React, {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { Button, Text } from "../../ui";

interface State {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormState = () => {
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    language: "",
  });
  const { email, password, language } = state;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({
      email,
      password,
      language,
    });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setState({
      ...state,
      [id]: value,
    });
    // setState((currentState) => ({
    //   ...currentState,
    //   [id]: value,
    // }));
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
        <input id="email" type="email" onChange={handleChange} value={email} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" onChange={handleChange} value={language} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
