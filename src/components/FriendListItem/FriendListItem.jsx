import PropTypes from 'prop-types';
import { Item, Online, Offline, Image, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <Online /> : <Offline />}
      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
