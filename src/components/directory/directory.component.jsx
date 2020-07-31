import React, { Component } from 'react';
import {} from './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';
class Directory extends Component{
constructor(){
super();
this.state = {
    sections:[
    {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'hats'
    },
    {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jacketsp.png',
    id: 2,
    linkUrl: 'jackets'
    },
    {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'sneakers'
    },
    {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    id: 4,
    size: 'large',
    linkUrl: 'womens'
    },{
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    id: 5,
    size: 'large',
    linkUrl: 'mens'
    }
    ]
    };

}

render(){
return <div className='directory-menu'>
{
    this.state.sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
        ))
}
</div>

}

}

export default Directory;