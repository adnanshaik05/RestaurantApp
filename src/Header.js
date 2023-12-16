const categoryIds = [
  {
    name: 'Salads and Soup',
    id: 0,
  },
  {
    name: 'From The Barnyard',
    id: 1,
  },
  {
    name: 'From the Hen House',
    id: 2,
  },
  {
    name: 'Fresh From The Sea',
    id: 3,
  },
  {
    name: 'Biryani',
    id: 4,
  },
  {
    name: 'Fast Food',
    id: 5,
  },
]

const Header = props => {
  const {setCategory, category} = props

  return (
    <nav className="nav-header">
      <div className="blog-container">
        <h1 className="blog-title">UNI Resto Cafe</h1>
        <p>My orders</p>

        {/* <ul>
          <Link to="/">
            <li>Salads and Soups</li>
          </Link>
        </ul> */}

        <div>
          {categoryIds.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.name)}
              className={category === item.name ? 'active' : ''}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
