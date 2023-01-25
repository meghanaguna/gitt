import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialContactsDetails = [
  {
    id: uuidv4(),
    name: 'name',
    comment: 'comment',
    isLiked: false,
    date: new Date(),
    count: 0,
    coloursUsed: initialContainerBackgroundClassNames[0],
  },
]

// Write your code here
class Comments extends Component {
  state = {
    contactsList: initialContactsDetails,
    name: '',
    comment: '',
    isLiked: false,
    date: new Date(),
    coloursUsed: initialContainerBackgroundClassNames,
  }

  name1 = event => {
    this.setState({name: event.target.value})
  }

  comment1 = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {coloursUsed, name, comment} = this.state

    const colours =
      initialContainerBackgroundClassNames[
        Math.ceil(Math.random() * coloursUsed.length - 1)
      ]

    const newData = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      count: 0,
      coloursUsed: colours,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newData],
      name: '',
      comment: '',
    }))
  }

  changeFavourite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteChange = id => {
    const {contactsList} = this.state
    const filteredList = contactsList.filter(each => each.id !== id)

    this.setState(prevState => ({contactsList: filteredList}))
  }

  render() {
    const {contactsList, name, comment, isLiked, count} = this.state
    const {id} = contactsList
    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.onAddComment}>
          <p>Say Something about 4.0 technologies</p>
          <input
            type="text"
            value={id}
            onChange={this.name1}
            placeholder="Your Name"
          />
          <textarea
            rows="5"
            onChange={this.comment1}
            placeholder="Your Comment"
          >
            {comment}
          </textarea>
          <button type="submit">Add Comment</button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
        <hr />
        <div>
          <div>
            <p>{count}</p>
            <h1>Comments</h1>
          </div>
          <ul>
            {contactsList.map(each => (
              <CommentItem
                details={each}
                colours={initialContainerBackgroundClassNames}
                changeFavourite={this.changeFavourite}
                deleteChange={this.deleteChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
