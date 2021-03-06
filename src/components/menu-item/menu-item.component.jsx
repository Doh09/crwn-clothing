import React from 'react';
import { withRouter } from "react-router-dom";
import {} from './menu-item.styles.scss';

const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-img' style={{backgroundImage: `url(${imageUrl})`}} />
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>{subtitle}</span>
    </div>
    </div>

);

export default withRouter(MenuItem);