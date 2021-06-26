import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown =({cartItems})=>{

    console.log(cartItems)
    return (
        <div className={"cart-dropdown"}>
            <div className={"cart-items"}>
                {Object.keys(cartItems).map(cartItemKey=>{
                    let cartItem = cartItems[cartItemKey]
                    return <CartItem key={cartItem.item.name} item={cartItem.item} quantity={cartItem.quantity}/>
                })}
            </div>
            <CustomButton>GO TO CHECKOUT </CustomButton>
        </div>
    );
}

const mapStateToProps =(state)=>{
    return {
        cartItems:selectCartItems(state)
    }
}
export default connect(mapStateToProps)(CartDropdown)
