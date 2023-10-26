import React, {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { Button, Text, Input } from "../../ui";

interface State {
  email: string;
  password: string;
  language: string;
}

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (
      emailFieldRef.current &&
      passwordFieldRef.current &&
      languageFieldRef.current
    ) {
      console.log({
        email: emailFieldRef.current.value,
        password: passwordFieldRef.current.value,
        language: languageFieldRef.current.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <p>
          E-mail: {email}, Password: {password}
        </p> */}
      </div>
      <Input ref={emailFieldRef} label="E-mail" type="email" />
      <Input ref={passwordFieldRef} label="Password" type="password" />
      <Input ref={languageFieldRef} label="Language" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
