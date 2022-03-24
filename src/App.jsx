import User from './components/profile/userProfile';
import userData from './user.json';
import Statistics from 'components/stats/statistics';
import userStat from './data.json';


export const App = () => {
  return (
    <div>
      <User
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
      title="Upload stats"
      stats={userStat}
        />
    </div>
  );
};
