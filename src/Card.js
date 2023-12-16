/* eslint-disable camelcase */
import Counter from './Counter'

const Card = props => {
  const {details} = props
  const {
    dishCalories,
    dishCurrency,
    dishDescription,
    dishImage,
    dish_name,
    dishPrice,
    addonCart,
  } = details

  let sameer
  if (addonCart !== undefined) {
    sameer = 'Customizations available'
  } else {
    sameer = 'Not available'
  }

  return (
    <li className="dish-item">
      <img src={dishImage} alt="dish" className="thumbnail" />
      <h2 className="title">{dish_name}</h2>
      <p className="rating">{dishCurrency}</p>
      <p className="price">{dishPrice}/</p>
      <div className="product-details">
        <p className="brand"> {dishDescription}</p>
        <div className="rating-container">
          <p> {dishCalories}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
          <Counter />
          <p>{sameer}</p>
        </div>
      </div>
    </li>
  )
}
export default Card
