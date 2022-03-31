import { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }

    handleOnClick = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        return (
            <>
                <p>Total <strong>count {this.state.count}</strong></p>
                <button onClick={this.handleOnClick}>Klik</button>
            </>
        )
    }
}

export default Counter;