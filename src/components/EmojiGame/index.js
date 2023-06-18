/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, TopScore: 0, clickedList: [], result: false}

  onBtnClicked = id => {
    const {clickedList} = this.state
    if (!clickedList.includes(id)) {
      this.setState(i => ({
        score: i.score + 1,
        clickedList: [...i.clickedList, id],
        result: i.score === 11,
      }))
    } else {
      this.setState(i => ({
        TopScore: i.TopScore < i.score ? i.score : i.TopScore,
        result: true,
      }))
    }
  }

  onResult = () => {
    this.setState(i => ({
      score: 0,
      TopScore: i.TopScore < i.score ? i.score : i.TopScore,
      result: !i.result,
      clickedList: [],
    }))
  }

  render() {
    const {score, TopScore, clickedList, result} = this.state
    const {emojisList} = this.props
    console.log(clickedList)

    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    console.log(shuffledEmojisList)

    return (
      <div className="cont1">
        {result ? (
          <>
            <ul>
              <NavBar />
            </ul>
            <div className="contMain">
              <WinOrLoseCard score={score} onBtn={this.onResult} />
            </div>
          </>
        ) : (
          <>
            <ul>
              <NavBar score={score} topScore={TopScore} />
            </ul>
            <ul className="contMain">
              {shuffledEmojisList.map(i => (
                <EmojiCard
                  key={i.id}
                  itemDetails={i}
                  onClicked={this.onBtnClicked}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGame
