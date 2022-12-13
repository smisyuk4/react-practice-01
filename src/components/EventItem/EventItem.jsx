// https://react-icons.github.io/react-icons/icons?name=im
import PropTypes from "prop-types"
import styles from "./EventItem.module.css"
import { ImLocation2, ImUser, ImStopwatch, ImCalendar, ImCross, ImCheckmark} from "react-icons/im";
import {formatDate, durationEvent } from "Utils";

const EventItem = ({title, location, name, start, finish, status}) => {
    return <li className={styles.item}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}><ImLocation2/>{location}</p>
                <p className={styles.desc}><ImUser/>{name}</p>
                <p className={styles.desc}><ImCalendar/> {formatDate(start)}</p>
                <p className={styles.desc}><ImStopwatch /> {durationEvent(start, finish)}</p>
                {status
                    ?
                    <span className={`${styles.status} ${styles.future}`}><ImCheckmark /></span>
                    :
                    <span className={`${styles.status} ${styles.closed}`}><ImCross /></span>
                }                
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