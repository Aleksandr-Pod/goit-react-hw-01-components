import PropTypes from 'prop-types'
import styles from './stats.module.css'
import StatItem from './stat'


export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(statItem => <StatItem stat={statItem} key={statItem.id} />
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}