// import friends from "./FrindList/friends.json";
import FriendListItem from "components/FriendListItem/FriendListItem"

const FriendList = ({ friends }) => {
     return <ul className="friend-list">
        <FriendListItem friends={friends}/>
    </ul>
}
   


export default FriendList