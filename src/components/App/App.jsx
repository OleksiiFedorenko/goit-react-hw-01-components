import { Profile } from 'components/Profile/Profile';
import userProfile from 'data/user.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={userProfile} />
    </Container>
  );
};
