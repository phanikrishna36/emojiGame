// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onBtn} = props
  const btnClick = () => {
    onBtn()
  }

  return (
    <li type="none" className="">
      {score < 12 ? (
        <div className="winLoose">
          <h1>You Lose</h1>
          <p>Score: {score}/12</p>
          <button type="button" onClick={btnClick}>
            Play Again
          </button>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
        </div>
      ) : (
        <div className="winLoose">
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={btnClick}>
            Play Again
          </button>
          <img
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        </div>
      )}
    </li>
  )
}

export default WinOrLoseCard
