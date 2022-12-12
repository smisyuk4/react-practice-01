import styles from "./Board.module.css"
import Title from "components/Title"
import EventList from "components/EventList"
import dataEvents from  "dataEvents.json"

const Board = () => {
    return <section className={styles.board}>
                <Title text="My task board" />
                <EventList events={dataEvents} />
            </section>
}

export default Board