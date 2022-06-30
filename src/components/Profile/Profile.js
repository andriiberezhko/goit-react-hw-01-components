import PropTypes  from "prop-types";
import s from './Profile.module.css'


const Profile = ({ avatar, username, tag, location, stats }) => {  
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
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={s.li}>
      <span className={s.label}>Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={s.li}>
      <span className={s.label}>Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}


export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats:PropTypes.objectOf(PropTypes.number).isRequired,  
};



