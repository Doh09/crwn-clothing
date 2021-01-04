import React from 'react';
import './collectionpage.styles.scss';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selectors.js';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';

const CollectionPage = ({match, collection}) => 
{
    const {title, items} = collection;
    console.log({match});
    console.log({collection});
    return(
    <div className='collection-page'>
    <h2>{title}</h2>
    <div className='items'>
    {
        items.map(x => ( 
            <CollectionItem key={x.id} item={x} ></CollectionItem>   
        ))
    }
    </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage); //match.params.collectionId