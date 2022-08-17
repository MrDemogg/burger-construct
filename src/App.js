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
  ingredients: [],
  saladAdd: true,
  cheeseAdd: true,
  meatAdd: true,
  baconAdd: true
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
      if (ingredientIndex === 0 && this.state.saladAdd || ingredientIndex === 1 && this.state.cheeseAdd || ingredientIndex === 2 && this.state.meatAdd || ingredientIndex === 3 && this.state.baconAdd) {
        const ingredients = this.state.ingredients;
        let fullprice = this.state.fullprice;
        fullprice += Object.values(this.state.price)[ingredientIndex]
        ingredients.push({class: Object.keys(this.state.price)[ingredientIndex]})
        this.setState({
          ingredients,
          fullprice
        })
        let ingredientRepeats = 0;
        for (let item in ingredients) {
          console.log(item + '   ' + this.state.ingredients[item].class + '   ' + Object.keys(this.state.price)[ingredientIndex])
          if (this.state.ingredients[item].class === Object.keys(this.state.price)[ingredientIndex]) {
            ingredientRepeats++
          }
        }
        let saladAdd = this.state.saladAdd;
        let cheeseAdd = this.state.cheeseAdd;
        let meatAdd = this.state.meatAdd;
        let baconAdd = this.state.baconAdd;
        if (ingredientRepeats === 2) {
          switch (Object.keys(this.state.price)[ingredientIndex]) {
            case 'Salad': 
              saladAdd = false
              break;
            case 'Cheese':
              cheeseAdd = false;
              break;
            case 'Meat':
              meatAdd = false;
              break;
            case 'Bacon':
              baconAdd = false;
              break;
            default:
          }
        }
        this.setState({
          saladAdd,
          cheeseAdd,
          meatAdd,
          baconAdd
        })
        this.fullprice = fullprice
        console.log(this.state.fullprice + 5)
      }
    }
    this.removeIngredient = (ingredientIndex) => {
      let saladAdd = this.state.saladAdd;
      let meatAdd = this.state.meatAdd;
      let baconAdd = this.state.baconAdd;
      let cheeseAdd = this.state.cheeseAdd;
      saladAdd = true;
      meatAdd = true;
      baconAdd = true;
      cheeseAdd = true;
      this.setState({
        saladAdd,
        meatAdd,
        baconAdd,
        cheeseAdd
      })
      let ingredientRepeats = 0;
      for (let item in this.state.ingredients) {
        if (this.state.ingredients[item].class === Object.keys(this.state.price)[ingredientIndex]) {
          ingredientRepeats++
        }
      }
      if (ingredientRepeats !== 0) {
        const ingredients = this.state.ingredients;
        for (let item = 0; item < ingredients.length; item++) {
          if (ingredients[item].class === Object.keys(this.state.price)[ingredientIndex]) {
            ingredients.splice(item, 1)
            item += 99
          }
        }
        let fullprice = this.state.fullprice;
        fullprice -= Object.values(this.state.price)[ingredientIndex]
        this.setState({
          fullprice,
          ingredients
        })
        this.fullprice = fullprice
      }
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
          <div className="burger__settings">
            <div className="burger__price">{this.fullprice} soms</div>
            <div className="burger__menu-item">
              <p className="burger__item-text">Salad</p>
              <button className='burger__button-remove burger__button' onClick={() => this.removeIngredient(0)}>Less</button>
              <button className='burger__button-add burger__button' onClick={() => this.addIngredient(0)}>More</button>
            </div>
            <div className="burger__menu-item">
              <p className="burger__item-text">Cheese</p>
              <button className='burger__bacon-remove burger__button' onClick={() => this.removeIngredient(1)}>Less</button>
              <button className='burger__button-add burger__button' onClick={() => this.addIngredient(1)}>More</button>
            </div>
            <div className="burger__menu-item">
              <p className="burger__item-text">Meat</p>
              <button className='burger__button-remove burger__button' onClick={() => this.removeIngredient(2)}>Less</button>
              <button className='burger__button-add burger__button' onClick={() => this.addIngredient(2)}>More</button>
            </div>
            <div className="burger__menu-item">
              <p className="burger__item-text">Bacon</p>
              <button className='burger__button-remove burger__button' onClick={() => this.removeIngredient(3)}>Less</button>
              <button className='burger__button-add burger__button' onClick={() => this.addIngredient(3)}>More</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
