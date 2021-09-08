import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emoji

  const onClickEmojiCard = () => onClickEmoji(id)

  return (
    <li className="emojiItem" onClick={onClickEmojiCard}>
      <img src={emojiUrl} alt={emojiName} className="emoji-image" />
    </li>
  )
}
export default EmojiCard
