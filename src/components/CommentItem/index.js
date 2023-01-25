// Write your code here
import './index.css'

const CommentItem = props => {
  const {details, colours, changeFavourite, deleteChange} = props
  const {id, name, comment, isLiked, date} = details

  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLiked ? 'Liked' : 'Like'

  const onchangeLike = () => {
    changeFavourite(id)
  }
  const deleting = () => {
    deleteChange(id)
  }

  return (
    <li>
      <div>
        <p>{name[0]}</p>
        <p>{name}</p>
        <p>{date.getMinutes()}</p>
      </div>
      <p>{comment}</p>
      <div>
        <div>
          <button id="like" type="button">
            <img src={likedImage} alt="like" />
          </button>
          <button onClick={onchangeLike}>Like</button>
        </div>
        <button type="button" onClick={deleting} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
