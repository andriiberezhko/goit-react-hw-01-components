import FriendListItem from "components/FriendListItem/FriendListItem"
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
     return <ul className={s.friendList}>
        <FriendListItem friends={friends}/>
    </ul>
}
   


export default FriendList