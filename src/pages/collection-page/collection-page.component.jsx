import {selectCollection} from "../../redux/shop/shop.selector";
import "./collection-page.styles.scss"
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (<div className={"collection-page"}>
        <div className="title">{title}</div>
        <div className="items">
            {items.map(item => <CollectionItem key={item.id} item={item}/>)}
        </div>

    </div>)
}


const mapStateToProps = (state, otherProps) => {
    return {
        collection: selectCollection(otherProps.match.params.collectionId)(state)
    }
}
export default connect(mapStateToProps)(CollectionPage)
