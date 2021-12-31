// Write your code here
import './index.css'

const ReviewsCarousel = props => {
  const {reviewDetail} = props
  const {imgUrl, username, companyName, description} = reviewDetail

  return (
    <li className="list-style">
      <img className="image-profile" src={imgUrl} alt={username} />
      <p className="name">{username}</p>
      <p>{companyName}</p>
      <p className="description">{description}</p>
    </li>
  )
}

export default ReviewsCarousel
