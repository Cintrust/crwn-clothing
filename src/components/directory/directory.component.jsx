import "./directory.styles.scss"
import {Component} from "react";
import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: '/images/hats.png',
                    id: 1,
                    linkUrl: 'shop-page/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: '/images/jackets.png',
                    id: 2,
                    linkUrl: 'shop-page/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: '/images/sneakers.png',
                    id: 3,
                    linkUrl: 'shop-page/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: '/images/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop-page/womens'
                },
                {
                    title: 'mens',
                    imageUrl: '/images/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop-page/mens'
                }
            ]
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

