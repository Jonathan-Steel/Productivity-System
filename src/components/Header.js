import PropTypes from 'prop-types'

const Header = ({ title, icon }) => {
    return (
        <div>
            <h1>{icon} {title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Jonathan's Productivity System",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
