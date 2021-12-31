import {Component} from 'react'
import ReviewsCarousel from './components/ReviewsCarousel'

import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class App extends Component {
  state = {id: 0}

  previousReview = () => {
    const {id} = this.state

    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  nextReview = () => {
    const {id} = this.state
    if (id < reviewsList.length - 1) {
      console.log(id)
      this.setState(prevState => ({id: prevState.id + 1}))
    } else {
      console.log('run')
      this.setState({id: reviewsList.length - 1})
    }
  }

  render() {
    const {id} = this.state
    const reviews = reviewsList[id]
    console.log(reviews.companyName)
    return (
      <div className="background-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            className="button"
            testid="leftArrow"
            type="button"
            onClick={this.previousReview}
          >
            <img
              className="arrow-style"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ul>
            <ReviewsCarousel reviewDetail={reviews} key={reviews.companyName} />
          </ul>
          <button
            className="button"
            testid="rightArrow"
            type="button"
            onClick={this.nextReview}
          >
            <img
              className="arrow-style"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default App
