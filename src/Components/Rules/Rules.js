import React from "react";
import Rule from "./Rule";
import { Card } from "react-bootstrap";
import "./Rules.css";
const rules = [
  {
    id: 1,
    img: "../img/bg.svg",
    rule: `Each participant will be provided with a unique ID and password to log on the Wallstreet website and start playing.He/She is expected to buy the shares using the cash amount.`,
  },
  {
    id: 2,
    img: "./img/cryptocurrency.png",
    rule: `As soon as the market opens at 9:00 AM on the first day(12th Febuary),every participant will be allowed to log into his account.`,
  },
  {
    id: 3,
    img: "./img/cryptocurrency.png",
    rule: `The market will be up from 9:00 AM to 5:00 PM on 12th,13th & 14th February 2021.This period is defined as "day" henceforth in the document.`,
  },
  {
    id: 4,
    img: "./img/cryptocurrency.png",
    rule: `Any buy bid or sell ask can be made within a margin of ±10% of the current share price.For ex,if the current market price of a share is Rs.100/-,a buy or sell bid can be made from any range between Rs. 90- Rs.110/-`,
  },
  {
    id: 5,
    img: "./img/cryptocurrency.png",
    rule: `A transaction fee of 1% of total transaction cost will be charged from both the seller and the buyer for every successful transaction between the two.`,
  },
  {
    id: 6,
    img: "./img/cryptocurrency.png",
    rule: `When a user places a buy bid for the shares of the compay A, the amount he's bidding for will be immedialtely deducted from his 
      account along with the relevant transaction fee of 1%. For ex. if the buyer buys 50 shares for Rs. 106 each share, the cost will
      be Rs.5300/-. Adding 1% transaction fee the final cost that'll be deducted from the buyer's account will be1.01*5300 = 
      Rs.5353/-. This amount will be immediately deducted, and the user won't be able to access this amount.`,
  },
  {
    id: 7,
    img: "./img/cryptocurrency.png",
    rule: `The Ranking of the user is decided using a "Valuation Formula".Valuation of the user will be 60% of his total assert value in Shares acquired (according to current market prices) + 40% of the cash balance in his account.This total will be termed as the valuation amount.`,
  },
  {
    id: 8,
    img: "./img/cryptocurrency.png",
    rule: `Only Integral Bids allowed.Decimal values will be invalid.`,
  },
  {
    id: 9,
    img: "./img/cryptocurrency.png",
    rule: `Participants can be disqualified for MALPRACTICES.`,
  },
  {
    id: 10,
    img: "./img/cryptocurrency.png",
    rule: `News regarding the listed companies would be displayed every half an hour.`,
  },
];

const Rules = () => {
  return (
    <div className="rules-page">
      <Card className="my_rules">
        <Card.Body>
          <div className="rules_container">
            {rules.map((obj) => {
              return <Rule rule={obj} />;
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Rules;
