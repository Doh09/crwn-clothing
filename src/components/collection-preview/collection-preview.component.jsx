import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({title, items}) => (

<div className='collection-preview'>
<h1 className='title'>
{title.toUpperCase()}
</h1>
<div className='preview'>
{items
    .filter((item, idx) =>  idx < 4) //idx = index, ligesom 'i' i en loop. Det her beregnes hver gang, så kan være en performance concern.
    .map(item => (
    <CollectionItem key={item.id} item={item}/>
))}
</div>
</div>
)

export default CollectionPreview;