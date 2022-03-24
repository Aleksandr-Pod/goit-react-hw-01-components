import FriendsListItem from './friendsListItem';


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