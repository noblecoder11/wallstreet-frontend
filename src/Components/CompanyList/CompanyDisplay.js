import React from 'react';
import './CompanyDisplay.css';
const CompanyDisplay=(props)=>{

    return (
        <>
        <div className="Company_container">
            <div className="Company_Name">{props.name}</div>
            <div className="Share_price">{props.price}</div>
        </div>
        </>
    );
}

export default CompanyDisplay;