import "./checkout-page.styles.scss"
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const Checkout = ({cartItems,total}) => {

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                Object.keys(cartItems).map(cartItemKey => <CheckoutItem key={cartItemKey} cartItem={cartItems[cartItemKey].item}
                                                                        quantity={cartItems[cartItemKey].quantity}/>)
            }
            <div className="total">TOTAL: ${total}</div>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(Checkout)
