import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};
