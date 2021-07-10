import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import {Route} from "react-router-dom";
import CollectionPage from "../collection-page/collection-page.component";
import {Component} from "react";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

let CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
let CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
    unSubscribeFromSnapshot = null;

    state = {
        isLoading: true
    }

    componentDidMount() {
        let {updateCollection} = this.props
        let collectionRef = firestore.collection("collections");
        collectionRef.onSnapshot(async snapshot => {
            console.log({snapshot})

            let collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log({collectionsMap});
            updateCollection(collectionsMap)
            this.setState({isLoading: false})

        })

    }


    renderCollectionOverview = (props) => {

        return <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>

    }
    renderCollectionPage = (props) => {

        return <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>

    }

    render() {
        let {match} = this.props;
        return (
            <div className={"shop-page"}>
                <Route exact path={`${match.path}`} render={this.renderCollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} render={this.renderCollectionPage}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCollection: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
