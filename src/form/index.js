import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import Input from './Input';

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />

      <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
    </Form>
  );
}