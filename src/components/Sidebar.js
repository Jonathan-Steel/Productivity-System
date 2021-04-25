import { FaInbox } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiSunset } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div>
            <h3><FaInbox /> Inbox</h3>
            <br></br>

            <h3><FaStar /> Today</h3>
            <h3><FaCalendarAlt /> Upcoming</h3>
            <h3><FiSunset /> Someday</h3>
            <br></br>

            <h3><FaCheckCircle /> Habits</h3>
        </div>
    )
}

export default Sidebar
