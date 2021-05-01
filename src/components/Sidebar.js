import Button from './Button'

import { FaInbox } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiSunset } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'

const Sidebar = ({ onSwitchView }) => {

    const switchView = (view) => {
        onSwitchView(view)
    }

    return (
        <div className="sidebar">
            
            <Button text="Inbox" icon={<FaInbox style={{color: 'royalblue'}} className="sidebar-icon" />} onClick={() => switchView("Inbox")}/>
            <Button text="Today" icon={<FaStar style={{color: 'gold'}} className="sidebar-icon" />} onClick={() => switchView("Today")}/>
            <Button text="Upcoming" icon={<FaCalendarAlt style={{color: 'crimson'}} className="sidebar-icon" />} onClick={() => switchView("Upcoming")}/>
            {/* <h3><FaInbox /> Inbox</h3>
            <br></br>

            <h3><FaStar /> Today</h3>
            <h3><FaCalendarAlt /> Upcoming</h3>
            <h3><FiSunset /> Someday</h3>
            <br></br>

            <h3><FaCheckCircle /> Habits</h3> */}
        </div>
    )
}

export default Sidebar
