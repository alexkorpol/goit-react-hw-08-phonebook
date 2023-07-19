import { Helmet } from 'react-helmet';
import { RegisterFormUser } from 'components/RegisterFormUser/RegisterFormUser';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterFormUser />
    </div>
  );
}
