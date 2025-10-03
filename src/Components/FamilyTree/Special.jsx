import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {
    const newAsset = useContext(AssetContext);
    
    console.log('new asset', newAsset);
    
    return (
        <div>
            <h2>Special</h2>
        <h2>Asset: {asset}</h2>
        <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;