// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => {
      console.log(`Previous stste value is ${preState.count}`)
      return {count: preState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The Button has been clicked <span className="number">{count} </span>
          times
        </h1>
        <p>click the button to increase the count!</p>

        <button onClick={this.onIncrement} className="button1">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
