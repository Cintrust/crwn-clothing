import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles"


const WithSpinner = WrappedComponent => {
    return ({isLoading, ...otherProps}) => {
        if (isLoading) {
            return (
                <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>
            )
        } else {
            return (<WrappedComponent {...otherProps}/>)
        }
    };
}

export default WithSpinner;
