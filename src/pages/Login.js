import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
      }}
    >
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
