import { Accordion } from "react-bootstrap";
import './news.css'

const NewsList = ({news, title}) => {
    return (
        <div className="news-list">
            <h2> {title} </h2>
            {news.map((article) => (
                <div className="news-preview" key={article.id}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className="news-header">
                                    <p className="news-company"> {article.company} </p>
                                    <h3 className="news-title"> {article.title} </h3>
                                    <p className="news-date"> {article.date} </p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="news-content">{article.content}</div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            ))}
        </div>
     );
}
 
export default NewsList;