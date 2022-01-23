import React from 'react';
import './Singletransaction.css';
const Singletransaction=(props)=>{
    return(
        <>
            <div className='trans_div'>
                <div className='td'>{props.element.name}</div>
                <div className='td'>{props.element.type}</div>
                <div className='td'>{props.element.Quantity}</div>
                <div className='td'>{props.element.Price}</div>
            </div>
        </>
    );
}
export default Singletransaction;