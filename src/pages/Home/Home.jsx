import { Container, Title, Link } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>Try to use this Phonebook</Title>
      <Link to="/login" title="Let's go!">
        Let's go!
      </Link>
    </Container>
  );
}
