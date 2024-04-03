import PropTypes from "prop-types";

//props is a special keyword in React, which stands for properties and is being used for passing data from one component to another.


function Student(props) {
    return (
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
 
// propTypes is a special keyword in React, used for typechecking to ensure that the data passed to the component is of the correct type.
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

// defaultProps is a special keyword in React, used to assign default values for the props in case the props are not passed to the component.
Student.defaultProps = {
    name: "Input not given",
    age: 0,
    isStudent: false,
}

export default Student;