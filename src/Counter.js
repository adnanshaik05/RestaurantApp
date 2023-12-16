import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="count">{count}</h1>
        <button type="submit" className="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="submit" className="button" onClick={this.onDecrement}>
          -
        </button>
      </div>
    )
  }
}

export default Counter
