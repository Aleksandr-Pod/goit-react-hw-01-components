import styles from './friendsList.module.css'
import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './Friends.styled';

export default function FriendsListItem({ avatar, name, isOnline }) {
    return (
        <FriendsItem>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendsItem>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}