import Navbar from "./Navbar";
import ExchangeRates from "./ExchangeRates";
import NewsAndDetails from "./NewsAndDetails";
import TransactionsBalance from "./TransactionsBalance";
import Footer from "./Footer";

import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className="DashboardContatiner">
            {/* <h1 style={{marginLeft:"400px"}}>Hello</h1> */}
            {/* <Navbar></Navbar>  */}
            <div className="DashContainer">
                <ExchangeRates></ExchangeRates>
                <div className="DivSeparater">
                    <NewsAndDetails></NewsAndDetails>
                    <TransactionsBalance></TransactionsBalance>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default Dashboard;