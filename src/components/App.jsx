import Profile from "./Profile/Profile";
import user from './Profile/user.json';
import data from './Statistics/data.json'
import Statistics from "./Statistics/Statistics";
import friends from "./FriendList/friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from './TransactionHistory/transactions.json'
import TransactionHistory from "./TransactionHistory/TransactionHistory";




export const App = () => {
  return (
    <div
      className="container"      
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}        
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}

      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
     
    </div>
  );
};
