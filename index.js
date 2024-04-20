import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isGiven: false,
  }

  changeGiven = () => {
    this.setState(prevState => ({isGiven: !prevState.isGiven}))
  }

  render() {
    const {resources} = this.props
    const {isGiven} = this.state
    const {emojis, loveEmojiUrl} = resources
    let displayContent
    if (isGiven === true) {
      displayContent = (
        <div className="feedback-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1 className="thanks">Thank You!</h1>
          <p className="para">
            We will use your feedback to improve our customer support and
            performance
          </p>
        </div>
      )
    } else {
      displayContent = (
        <div className="initial-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list">
            {emojis.map(each => (
              <li
                className="emoji-cont"
                key={each.id}
                onClick={this.changeGiven}
              >
                <div>
                  <img src={each.imageUrl} alt={each.name} />
                  <p className="para">{each.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="container">
        <div>{displayContent}</div>
      </div>
    )
  }
}

export default Feedback
