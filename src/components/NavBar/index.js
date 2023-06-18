// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <li type="none" className="contHead">
      <div className="NavAlign">
        <img
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      {score !== undefined && topScore !== undefined ? (
        <div>
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default NavBar
