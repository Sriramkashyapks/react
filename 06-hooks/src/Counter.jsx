import React from "react";

class Counter extends React.Component {
	// creating constructor to use "state"
	constructor(props) {
		super(props);

		// we have given the state of count = 0 at initially
		this.state = { count: 0 };
	}

	// we are using increment function to change the state to new state with setState

	incrementFunction() {
		this.setState({ count: this.state.count + 1 });
	}

	// we need to render and display the the result
	render() {
		return (
			<div className="flex flex-col justify-center items-center">
				{/* displaying the state */}
				<h1>state and setState Using Class Component And Constructor</h1>
				<h1>Count is: {this.state.count}</h1>
				<button
					type="button"
					onClick={() => this.incrementFunction()}
					className="bg-blue-600 p-3 mt-2 text-white font-bold rounded-lg">
					Increment
				</button>
			</div>
		);
	}
}

export default Counter;
