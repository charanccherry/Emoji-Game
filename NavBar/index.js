import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="logo-part">
        <p className="text">Score: {currentScore}</p>
        <p className="text">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="emoji-header">
        <div className="logo-part">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="text-head">Emoji Game</h1>
        </div>
        {this.renderScore()}
      </nav>
    )
  }
}
export default NavBar
