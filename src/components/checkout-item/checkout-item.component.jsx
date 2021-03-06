import "./checkout-item.styles.scss"
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({cartItem, quantity, clearItemFromCart, addItem, removeItem}) => {
    let {name, price, imageUrl} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container"><img src={imageUrl} alt="item"/></div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => quantity && removeItem(cartItem)}
                     className={quantity ? "arrow" : "arrow-disabled"}>&#10094;</div>
               <span className={"value"}> {quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className={"remove-button"}>&#10005;</div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        clearItemFromCart: item => dispatch(clearItemFromCart(item)),
        addItem: item => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item)),
    }
}


export default connect(null, mapDispatchToProps)(CheckoutItem);
