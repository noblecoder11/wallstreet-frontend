import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// styles
import './news.css'
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const StocksList = ({ title }) => {
 
    const [query, setQuery] = useState('');
    const {id} = useParams();
    const handleChange = event => {
        setQuery(event.target.value);
    };

    const [stocksList, setStockList] = useState([
        { title: 'Constructza', companyId: 1, sharePrice: 230.45, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'Apple', companyId: 2, sharePrice: 98.74, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'Janta Bank', companyId: 3, sharePrice: 30.23, companyInfo: 'Lorem ipsum dolor sit amet...' },
        { title: 'Ortin Laboratories', companyId: 4, sharePrice: 150.45, companyInfo: 'Lorem ipsum dolor sit amet...' },
    ]);

    // const searchQuery = event => {
    //     console.log(event.target.value);
    //     newStocksList = stocksList.filter()
    // }

    return (
        <div className="stocks-list">
            <div>{title} </div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search Company"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                />
                <Button variant="outline-secondary" id="button-addon2">
                <i class="fas fa-search"></i>
                </Button>
            </InputGroup>
            {/* <input type="text" name="query" id="" placeholder='Search' onChange={handleChange} /> */}
            {stocksList.filter((stock) => (stock.title.includes(query))).map((stock) => (
                <div className="stock" key={stock.companyId}>
                    <Link to={"/buysell/" + stock.companyId}>
                        <Button className="container-md" variant="outline-dark" size="lg" >
                            <div className="stock-preview blog-preview">
                                <span className="stock-title" >{stock.title}</span>
                                <span className="stock-price">₹{stock.sharePrice}</span>
                            </div>
                        </Button>
                    </Link>
                </div>
            ))}

            {id}
        </div>

        
    );
}

export default StocksList;
