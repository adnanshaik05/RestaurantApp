import {Component} from 'react'
import Card from './Card'
import Header from './Header'

class Salads extends Component {
  constructor(props) {
    super(props)
    this.state = {dishesData: [], menuCategory: 'Salads and Soup'}

    this.setCategory = this.setCategory.bind(this)
  }

  componentDidMount() {
    this.getDishes()
  }

  componentDidUpdate(prevProps, prevState) {
    const {menuCategory} = this.state
    if (prevState.menuCategory !== menuCategory) {
      this.getDishes()
    }
  }

  getDishes = async () => {
    const {menuCategory} = this.state
    const response = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )
    const data = await response.json()
    const filteredData = data[0].table_menu_list.filter(
      item => item.menu_category === menuCategory,
    )[0].category_dishes

    const updatedData = filteredData.map(each => ({
      dishId: each.dish_id,
      dish_name: each.dish_name,
      dishPrice: each.dish_price,
      dishImage: each.dish_image,
      dishCalories: each.dish_calories,
      dishCurrency: each.dish_currency,
      dishDescription: each.dish_description,
    }))

    this.setState({
      dishesData: updatedData,
    })
  }

  setCategory(name) {
    console.log(name)
    this.setState(prevState => ({
      ...prevState,
      menuCategory: name,
    }))
  }

  render() {
    const {dishesData, menuCategory} = this.state

    return (
      <div className="dishes-container">
        <Header setCategory={this.setCategory} category={menuCategory} />
        <ul className="products-list">
          {dishesData.map(each => (
            <Card details={each} key={each.dishId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Salads
