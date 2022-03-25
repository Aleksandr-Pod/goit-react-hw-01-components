import FriendsListItem from './friendsListItem';
import PropTypes from 'prop-types';


export default function FriendsList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (<FriendsListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id} />))
            }
        </ul>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired}))
}