import React from 'react';
import './style/coodinate.css';

export default function Coodinate(props){
    var feature = props.feature;
    if (!feature) return <div></div>;

    if (Object.keys(feature).length > 2){
        return (
            <div className="coodinate">
                {feature.prefName} {feature.name}
            </div>
        );
    } 
    else {
        return (
            <div className="coodinate">
                {feature.prefName} 
                <p style={{"fontSize": "small", marginTop: "0.5rem"}}>{feature.prefCode}</p>
            </div>
        );
    }
}