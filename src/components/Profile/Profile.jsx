import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileStats,
} from './Profile.styled';

export const Profile = () => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
      </ProfileDescription>

      <ProfileStats>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};
