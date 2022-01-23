import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import LatestNews from "./LatestNews";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import './news.css'

const NewsPage = () => {

    const [news, setNews] = useState([
        {id: 1, company: 'Constructza', title: 'New sites for construction aquired by constructza recently in Aurangabad.', date: 'JANUARY 5, 08:34 AM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`},

        {id: 2, company: 'Janta Bank', title: 'Repo rate to be increased by RBI', date:'JANUARY 2, 10:34 AM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`},

        {id: 3, company: 'Tesla', title: 'New EV model launch date released', date:'JANUARY 11, 01:58 PM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.
        "This means there is a high likelihood of additional cancellations until case counts start to come down."\n\n\n\n
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`},

        {id: 4, company: 'Apple', title: 'Lorem4 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 5, company: 'Apple', title: 'Lorem5 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 6, company: 'Apple', title: 'Lorem6 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 7, company: 'Apple', title: 'Lorem7 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 8, company: 'Apple', title: 'Lorem8 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 9, company: 'Apple', title: 'Lorem9 ipsum', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 10, company: 'Apple', title: 'Lorem1 ipsum0', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 11, company: 'Apple', title: 'Lorem1 ipsum1', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 12, company: 'Apple', title: 'Lorem1 ipsum2', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 13, company: 'Apple', title: 'Lorem1 ipsum3', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 14, company: 'Apple', title: 'Lorem1 ipsum4', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 15, company: 'Apple', title: 'Lorem1 ipsum5', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 16, company: 'Apple', title: 'Lorem1 ipsum6', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 17, company: 'Apple', title: 'Lorem1 ipsum7', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 18, company: 'Apple', title: 'Lorem1 ipsum8', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 19, company: 'Apple', title: 'Lorem1 ipsum9', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 20, company: 'Apple', title: 'Lorem2 ipsum0', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 21, company: 'Apple', title: 'Lorem2 ipsum1', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 22, company: 'Apple', title: 'Lorem2 ipsum2', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 23, company: 'Apple', title: 'Lorem2 ipsum3', date: 'JANUARY 2, 10:34 AM', content: 'some random text'},
        {id: 24, company: 'Constructza', title: 'New sites for construction aquired by constructza recently in Aurangabad.', date: 'JANUARY 5, 08:34 AM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`},

        {id: 25, company: 'Janta Bank', title: 'Repo rate to be increased by RBI', date:'JANUARY 2, 10:34 AM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`},

        {id: 26, company: 'Tesla', title: 'New EV model launch date released', date:'JANUARY 11, 01:58 PM', content: `JetBlue Airways will cancel about 1,280 flights between now and January, in expectation of continued Covid-19 outbreaks brought on by the omicron variant, the airline said Thursday.

        The cutbacks are targeted for scheduled flights between Thursday and Jan. 13, CNBC reported.
        
        JetBlue, North America's sixth-largest carrier, is based in New York City, where the number of cases are radically spiking —  though hospitalizations are climbing at a slightly less alarming rate.
        
        The airline said Wednesday it would be "proactively reducing" its schedule through Jan. 13 "to give our customers give as much notice possible." The Wednesday statement didn't specify exactly how many flights would be scuttled.
        
        Earlier this week, the CDC said those testing positive, but have no symptoms, should isolate for five days, down from the previous recommendation of 10.
        
        That adjustment should slightly help staffing levels, but still won't be enough to offset the greater Covid-19 spike, JetBlue said.
        
        "While the new CDC guidelines should help get crew members back to work sooner, and our schedule reduction and other efforts will further ease day-of cancellations, we expect the number of Covid cases in the northeast — where most of our crew members are based — to continue to surge for the next week or two," the carrier said Wednesday.
        
        "This means there is a high likelihood of additional cancellations until case counts start to come down."
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.
        "This means there is a high likelihood of additional cancellations until case counts start to come down."\n\n\n\n
        
        There were 83 JetBlue flights canceled on Wednesday and more on Thursday, with some frustrated passengers saying they waited on hold for up to five hours without an airline agent picking up the phone.
        
        This busy holiday travel season has been plagued by canceled flights through the U.S. and world as airlines struggle with staffing shortages, trigged by increases in Covid-19 cases.
        
        There are already at least 2,590 flight cancellations worldwide by mid-morning Thursday, with 1,073 of those incidents involving U.S.-bound or -based journeys, according to tracking service FlightAware.`}
    ]);

    const [page, changePage] = useState(1);
    

    // const myRef = useRef(null)

    // useEffect(() => {
    //     if (myRef != null) {
    //         myRef.current.scrollIntoView();
    //     } else {

    //     }
    //     // setTimeout(() => {window.scrollTo({
    //     //     top: 0, 
    //     //     behavior: 'smooth'
    //     //     });}, 500);
    // }, [page]);
    
    var numbers = [];
    var latest = news.length-1;
    for (var i = 1; i <= latest/10+1; i++) {
        numbers.push(i);
    }

    const listItems = numbers.map((number) =>
        <ToggleButton variant="secondary" id={"tbg-radio-"+number} value={number} onClick={() => changePage(number)}>{number}</ToggleButton>
    );

    return ( 
        <div className="news-page">
            
            <LatestNews news={news} title="Latest News"></LatestNews>

            <NewsList news={news.slice(0).reverse().filter(news => (news.id <= latest+1-10*(page-1) && news.id >= latest-10*(page) ))} title="All News"></NewsList>

            <ToggleButtonGroup className="me-2" type="radio" name="options" defaultValue={1}>
                {listItems}
            </ToggleButtonGroup>
        </div>
     );
}
 
export default NewsPage;