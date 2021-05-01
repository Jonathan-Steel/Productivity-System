import PropTypes from 'prop-types'

const Button = ({ text, onClick, className, icon }) => {
    return (
        <button onClick={onClick} className={`${className ? className : 'btn'}`}>{icon && icon} {text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
