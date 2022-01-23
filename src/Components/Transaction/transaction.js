import React from 'react'
import './transaction.css'
import Singletransaction from './Singletransaction'
const Transaction = props => {
  return (
    <>
      <div className='container'>
        <div className='Heading'>{props.type}</div>
        <div className='column'>
          <div className='col'>Company</div>
          <div className='col'>Buy/Sell</div>
          <div className='col'>Quantity</div>
          <div className='col'>Share Price</div>
        </div>
        <div className='scroll_div'>
          {props.list.map(element => {
            return <Singletransaction element={element} />
          })}
        </div>
      </div>
    </>
  )
}
export default Transaction
