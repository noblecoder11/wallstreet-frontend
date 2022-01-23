import { Carousel } from "react-bootstrap";
import './news.css'

const LatestNews = ({news, title}) => {

    // const latesta = news.length;
    var latest = news.length-1;

    return ( 
        <div className="latest-news">
            <h2> {title} </h2>
            <Carousel>
                {/* 1 */}
                <Carousel.Item>
                    <div className="news-header container-fluid">
                        <p> {news[latest].company} </p>
                        <h3> {news[latest].title} </h3>
                        <p className="news-date"> {news[latest].date} </p>
                        {/* <p> {news[latest].content} </p> */}
                    </div>
                </Carousel.Item>
                {/* 2 */}
                <Carousel.Item>
                    <div className="news-header container-fluid">
                        <p> {news[latest-1].company} </p>
                        <h3> {news[latest-1].title} </h3> 
                        <p className="news-date"> {news[latest-1].date} </p>
                        {/* <p> {news[latest-1].content} </p> */}
                    </div>
                    
                </Carousel.Item>
                {/* 3 */}
                <Carousel.Item>
                    <div className="news-header container-fluid">
                        <p> {news[latest-2].company} </p>
                        <h3> {news[latest-2].title} </h3> 
                        <p className="news-date"> {news[latest-2].date} </p>
                        {/* <p> {news[latest-2].content} </p> */}
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>

     );
}
 
export default LatestNews;