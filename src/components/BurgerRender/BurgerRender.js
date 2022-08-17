
const BurgerRender = (props) => {
    return <div className={props.ingredient} key={props.itemIndex} id={props.itemIndex}></div>
}

export default BurgerRender