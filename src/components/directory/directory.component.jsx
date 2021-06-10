import "./directory.styles.scss"
import {Component} from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({id, ...OtherProps}) => (<MenuItem key={id} {...OtherProps}/>)
                    )
                }
            </div>)
    }

}

