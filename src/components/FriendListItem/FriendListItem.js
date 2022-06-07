import PropTypes from "prop-types";
import s from './FriendListItem.module.css'

const FriendListItem = ({friends}) => {
    return friends.map(friend =>  (
            <li className={s.item} key={friend.id}>
           
            <span className={s.status}
                
                style={{backgroundColor: friend.isOnline ? 'green':'red'}}
            ></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{friend.name}</p>
            </li>
         ))
}

export default FriendListItem

FriendListItem.propTypes = {
    friends: PropTypes.array,
}