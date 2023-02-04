import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Forma, Label, Input, Btn } from "./LoginForm.styled"

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Forma onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      {/* <button type="submit">Log In</button> */}

      <Btn type="submit">Login</Btn>
    </Forma>
  );
};
