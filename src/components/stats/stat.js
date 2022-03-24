import styles from './stats.module.css';
import PropTypes from 'prop-types'

export default function StatItem(stat, id) {
    return (
        <li className={styles.item} key={id}>
            <span className={styles.label}>{stat.stat.label}</span>
            <span className={styles.percentage}>{stat.stat.percentage}%</span>
        </li>
    )
}
StatItem.propTypes = {
    stat: PropTypes.object,
    id: PropTypes.string
}