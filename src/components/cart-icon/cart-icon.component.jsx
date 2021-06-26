import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


const CartIcon = ({toggleCartHidden, itemsCount}) => {
    return (
        <div className={"cart-icon"} onClick={toggleCartHidden}>
            <ShoppingIcon className={"shopping-icon"}/>
            <span className={"item-count"}>{itemsCount}</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
