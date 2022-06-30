import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem"
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
     return <ul className={s.friendList}>
         {
             friends.map(({id, isOnline, avatar, name }) => (
                 <FriendListItem
                     key={id}
                     isOnline={isOnline}
                     avatar={avatar}
                   name={name}
                 />))
         }
         
         
    </ul>
}
   


export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,    
}