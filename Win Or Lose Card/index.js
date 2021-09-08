import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, oClickPlayAgain, score} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE

  return (
    <div className="winOrLose-card">
      <div className="winOrLose-details">
        <h1 className="score-head">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again"
          testid="play again"
          type="button"
          onClick={oClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-Url">
        <img src={imageUrl} alt="imageUrl" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
