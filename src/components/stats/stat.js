import styles from './stats.module.css';
import PropTypes from 'prop-types'

export default function StatItem({ stat }) {
    return (
        <li className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
    )
}
StatItem.propTypes = {
    stat: PropTypes.object.isRequired
}