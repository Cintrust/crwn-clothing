import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => {
    return (
        <div className={"collections-overview"}>
            {
                collections.map(
                    ({id, ...otherProps}) => (<CollectionPreview key={id} {...otherProps}/>)
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
