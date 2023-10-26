import React, { FormEventHandler, useRef, useEffect } from "react";
import { Button, Text, Input } from "../../ui";

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(`mount`);
    // if (emailFieldRef.current) {
    //   emailFieldRef.current.focus();
    // }
    return () => {
      console.log("unmount");
    };
  }, []);

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
      <Input
        ref={emailFieldRef}
        label="E-mail"
        type="email"
        defaultValue="jan@kowalski.pl"
      />
      <Input ref={passwordFieldRef} label="Password" type="password" />
      <Input ref={languageFieldRef} label="Language" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
