import PropTypes from "prop-types";
import s from './Profile.module.css'


const Profile = ({  avatar, username, tag, location,  followers, views, likes }) => {
    return <div className={s.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.li}>
      <span className={s.label}>Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={s.li}>
      <span className={s.label}>Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className={s.li}>
      <span className={s.label}>Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}


export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,  
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};



