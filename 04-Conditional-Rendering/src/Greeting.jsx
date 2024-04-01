import propTypes from "prop-types"

//conditional rendering is used to render different components based on certain conditions

function Greeting(props) {
    
    const welcome_user = <h2 className="user">Hello {props.userName}</h2>

    const user_not_logged = <h2 className="guest">Continue as a guest</h2>

    return(
        props.isLoggedIn ? welcome_user : user_not_logged
    );
    
}

Greeting.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    userName: propTypes.string.isRequired,
}

Greeting.defaultProps = {
    isLoggedIn: false,
}

export default Greeting;