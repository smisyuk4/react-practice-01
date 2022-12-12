import PropTypes from "prop-types"
import styles from "./EventItem.module.css"


const EventItem = ({title, location, name, start, finish, status}) => {
    return <li className={styles.item}>
                <h2 className={styles.title}>title {title }</h2>
                <p className={styles.location}>location {location }</p>
                <p className={styles.name}>name {name }</p>
                <p className={styles.start}>start {start }</p>
                <p className={styles.duration}>duration {finish }</p>
                <span className={styles.status}>status {status }</span>
            </li>
}

EventItem.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    finish: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
}

export default EventItem