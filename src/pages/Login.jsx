import { LoginUser } from 'components/LoginUser/LoginUser';
import { Helmet } from 'react-helmet';

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
