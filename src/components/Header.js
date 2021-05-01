import PropTypes from 'prop-types'
import { useState } from 'react'

import { FaInbox } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiSunset } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'

const Header = ({ view }) => {
    let icon = null

    // console.log(`Header view: ${view}`)
    switch (view) {
        case "Inbox":
            icon = <FaInbox className="header-icon" style={{color: 'royalblue'}} />
            break;
        case "Today":
            icon = <FaStar className="header-icon" style={{color: 'gold'}} />
            break;
        case "Upcoming":
            icon = <FaCalendarAlt className="header-icon" style={{color: 'crimson'}} />
            break;
    }
    return (
        <div>
            <h1>{icon} {view}</h1>
        </div>
    )
}

// Header.defaultProps = {
//     title: "Jonathan's Productivity System",
// }

// Header.propTypes = {
//     title: PropTypes.string,
// }

export default Header
