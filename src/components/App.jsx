import User from './userProfile'
import userData from '../user.json'

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
    </div>
  );
};
