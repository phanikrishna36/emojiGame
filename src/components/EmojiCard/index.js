// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {itemDetails, onClicked} = props
  const {id, emojiName, emojiUrl} = itemDetails
  const onBtnClicked = () => {
    onClicked(id)
  }

  return (
    <li type="none" id={id}>
      <button onClick={onBtnClicked} className="contEmoji" type="button">
        <img alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
