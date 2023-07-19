import { LoginUser } from 'components/LoginUser/LoginUser';
import { Helmet } from 'react-helmet';
// import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginUser />
    </div>
  );
}
