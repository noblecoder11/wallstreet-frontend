import CompanyDisplay from './CompanyDisplay'
import './DisplayList.css'

const CompanyList = [
  {
    name: 'Tata Moters',
    price: 100,
    key: 1
  },
  {
    name: 'HDFC Bank',
    price: 150,
    key: 2
  },
  {
    name: 'HDFC',
    price: 300,
    key: 3
  },
  {
    name: 'Reliance Industries',
    price: 450,
    key: 4
  },
  {
    name: 'Royal Developers',
    price: 50,
    key: 5
  },
  {
    name: 'HETCH C&D',
    price: 70,
    key: 6
  },
  {
    name: 'Tata Moters',
    price: 100,
    key: 7
  },
  {
    name: 'HDFC Bank',
    price: 150,
    key: 8
  },
  {
    name: 'HDFC',
    price: 300,
    key: 9
  },
  {
    name: 'Reliance Industries',
    price: 450,
    key: 10
  },
  {
    name: 'Royal Developers',
    price: 50,
    key: 11
  },
  {
    name: 'HETCH C&D',
    price: 70,
    key: 12
  },
  {
    name: 'Tata Moters',
    price: 100,
    key: 13
  },
  {
    name: 'HDFC Bank',
    price: 150,
    key: 14
  },
  {
    name: 'HDFC',
    price: 300,
    key: 15
  },
  {
    name: 'Reliance Industries',
    price: 450,
    key: 16
  },
  {
    name: 'Royal Developers',
    price: 50,
    key: 17
  },
  {
    name: 'HETCH C&D',
    price: 70,
    key: 18
  },
  {
    name: 'Tata Moters',
    price: 100,
    key: 19
  },
  {
    name: 'HDFC Bank',
    price: 150,
    key: 20
  },
  {
    name: 'HDFC',
    price: 300,
    key: 21
  },
  {
    name: 'Reliance Industries',
    price: 450,
    key: 22
  },
  {
    name: 'Royal Developers',
    price: 50,
    key: 23
  },
  {
    name: 'HETCH C&D',
    price: 70,
    key: 24
  },
  {
    name: 'Tata Moters',
    price: 100,
    key: 25
  },
  {
    name: 'HDFC Bank',
    price: 150,
    key: 26
  },
  {
    name: 'HDFC',
    price: 300,
    key: 27
  },
  {
    name: 'Reliance Industries',
    price: 450,
    key: 28
  },
  {
    name: 'Royal Developers',
    price: 50,
    key: 29
  },
  {
    name: 'HETCH C&D',
    price: 70,
    key: 30
  }
]

const DisplayList = props => {
  var toDisplayList = null
  if (props.keyword === '') {
    toDisplayList = CompanyList
  } else {
    toDisplayList = CompanyList.filter(element =>
      element.name.toUpperCase().includes(props.keyword)
    )
  }

  if(toDisplayList.length===0)
  {
    return(
      <>
        <div id='Display_container'>
        <div className='grid'>
          <div className='column'>Company</div>
          <div className='column'>Share Price</div>
        </div>
        <div className='noMatchesdiv'>No matches Found!</div>
      </div>
      </>
    );
  }

  return (
    <>
      <div id='Display_container'>
        <div className='grid'>
          <div className='column'>Company</div>
          <div className='column'>Share Price</div>
        </div>
        {toDisplayList.map(element => {
          return (
            <CompanyDisplay
              name={element.name}
              price={element.price}
              key={element.key}
            />
          )
        })}
      </div>
    </>
  )
}

export default DisplayList
