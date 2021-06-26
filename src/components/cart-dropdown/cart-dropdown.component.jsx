import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {

    let cartItemsKeys = Object.keys(cartItems)
    return (
        <div className={"cart-dropdown"}>
            <div className={"cart-items"}>
                {cartItemsKeys.length ? cartItemsKeys.map(cartItemKey => {
                        let cartItem = cartItems[cartItemKey]
                        return <CartItem key={cartItem.item.name} item={cartItem.item} quantity={cartItem.quantity}/>
                    }) :
                    <span className={"empty-message"}>Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")

                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT </CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
