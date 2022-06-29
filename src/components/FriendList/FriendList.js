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
             ></FriendListItem>))
         }
         
         
    </ul>
}
   


export default FriendList

FriendList.propTypes = {
    friends: PropTypes.array,
    // id:PropTypes.number,
    // isOnline: PropTypes.bool,
    // avatar: PropTypes.string,
    // name: PropTypes.string,
}