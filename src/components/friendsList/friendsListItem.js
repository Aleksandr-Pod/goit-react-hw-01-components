import styles from './friendsList.module.css'

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