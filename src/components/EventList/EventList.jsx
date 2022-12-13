// import PropTypes from "prop-types"
import styles from "./EventList.module.css"
import EventItem from "../EventItem/EventItem"


const EventList = ({events}) => {
    return <ul className={styles.list}>
        {events.map(({ name, title, location, time, status }) =>
                <EventItem
                    key={title}
                    title={title}
                    location={location}
                    name={name}
                    start={time.start}
                    finish={time.finish}
                    status={status}
                />)}                
            </ul>
}

export default EventList