import PropTypes from "prop-types";
import s from './FriendListItem.module.css'

const FriendListItem = ({ isOnline, avatar, name }) => {
    const onlineStyle = s.status + ' ' + s.is_online;
    const offlineStyle = s.status + ' ' + s.is_offline;
    return (
        <li className={s.item} >           
        <span className={isOnline ? onlineStyle : offlineStyle  }></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}