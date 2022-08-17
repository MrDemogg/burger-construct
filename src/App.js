import { Component } from 'react'
import './burger.css'
import './App.css';
import BurgerRender from './components/BurgerRender/BurgerRender';

const mockData = {
  price: {
    Salad: 5,
    Cheese: 20,
    Meat: 50,
    Bacon: 30
  },
  fullprice: 20,
  ingredients: []
}
class App extends Component {
  componentDidMount() {
    this.setState(mockData)
  }
  fullprice = 20;
  constructor(props) {
    super(props)
    this.state = null;
    this.addIngredient = (ingredientIndex) => {
      const ingredients = this.state.ingredients;
      let fullprice = this.state.fullprice;
      fullprice += Object.values(this.state.price)[ingredientIndex]
      ingredients.push({class: Object.keys(this.state.price)[ingredientIndex]})
      this.setState({
        ingredients,
        fullprice
      })
      this.fullprice = fullprice
      console.log(this.state.fullprice + 5)
    }
  }
  render() {
    return (
      <div className="burger">
        <div className="burger__pre-view">
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className='Seeds2'></div>
            </div>
            {this.state ?
              this.state.ingredients.map((item, index) => {
                return (
                  <BurgerRender itemIndex={index} ingredient={item.class} />
                )
              }) : 'ы'
            }
            <div className="BreadBottom"></div>
          </div>
        </div>
        <div className="burger__menu">
          <div className="burger__price">{this.fullprice} soms</div>
          <div className="burger__menu-item">
            <p className="burger__item-text">Salad</p>
            <button className='burger__button-remove'>Less</button>
            <button className='burger__salad-add' onClick={() => this.addIngredient(0)}>More</button>
          </div>
          <div className="burger__menu-item">
            <p className="burger__item-text">Salad</p>
            <button className='burger__bacon-remove'>Less</button>
            <button className='burger__button-add' onClick={() => this.addIngredient(1)}>More</button>
          </div>
          <div className="burger__menu-item">
            <p className="burger__item-text">Salad</p>
            <button className='burger__button-remove'>Less</button>
            <button className='burger__button-add' onClick={() => this.addIngredient(2)}>More</button>
          </div>
          <div className="burger__menu-item">
            <p className="burger__item-text">Salad</p>
            <button className='burger__button-remove'>Less</button>
            <button className='burger__button-add' onClick={() => this.addIngredient(3)}>More</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
