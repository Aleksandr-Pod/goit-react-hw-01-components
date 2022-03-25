import styles from './friendsList.module.css'
import PropTypes from 'prop-types';

export default function FriendsListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles.item}>
            {isOnline ? <span className={styles.isOnline}></span> :
                <span className={styles.isOffline}></span>}
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}