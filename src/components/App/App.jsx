import user from 'data/user.json';
import statsData from 'data/data.json';
import friends from 'data/friends.json';
import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={statsData} /> */}
      <FriendList friends={friends} />
    </Container>
  );
};
