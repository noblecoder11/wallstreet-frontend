import { useState } from 'react'
import { useParams} from 'react-router-dom';
import './news.css'
import { Nav } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
const BuySell = () => {

    const [stocksList, setStockList] = useState([
        { title: 'CONSTRUCTZA', companyId: 1, sharePrice: 230.45, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'APPLE', companyId: 2, sharePrice: 98.74, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'JANTA BANK', companyId: 3, sharePrice: 30.23, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'ORTIN LABS', companyId: 4, sharePrice: 150.45, companyInfo: 'Lorem ipsum dolor sit amet...' },
    ]);

    const {id} = useParams();

    const [state, setState] = useState("Buy");

    const handleSelect = event => {
        if (event === "buy") {
            setState("Buy");
        } else {
            setState("Sell");
        }
    }

    return (
        <div className="buy-sell">

            {/* Current company details */}
            <div className="current-transact-info">
                <span className="current-transact-company">{stocksList[id-1].title}</span>
                <span className="current-transact-marketprice">₹{stocksList[id-1].sharePrice}</span>
            </div>

            {/* Buy-Sell Navigation bar */}
            <Nav justify variant="tabs" defaultActiveKey="/home" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="buy">Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sell">Sell</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Order options */}
            <div className="order-options">
                
                {/* Quantity */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Quantity</InputGroup.Text>
                    <FormControl
                        type="number"
                        id="inputQuntity"
                        placeholder='Enter Quantity'
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                {/* Price */}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">{state} Price</InputGroup.Text>
                    <FormControl
                        type="number"
                        id="inputBidPrice"
                        placeholder='Enter bid price'
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                {/* Button to place order */}
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        {state}
                    </Button>
                </div>
            </div>

            {/* Searching */}
            {/* <StocksList title="All Stocks"></StocksList> */}
        </div>
    );
}

export default BuySell;