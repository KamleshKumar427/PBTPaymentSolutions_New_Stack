import Navbar from "./Navbar";
import ExchangeRates from "./ExchangeRates";
import NewsAndDetails from "./NewsAndDetails";
import TransactionsBalance from "./TransactionsBalance";
import './Dashboard.css';
const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar> 
            <div className="DashContainer">
                <ExchangeRates></ExchangeRates>
                <div className="DivSeparater">
                    <NewsAndDetails></NewsAndDetails>
                    <TransactionsBalance></TransactionsBalance>
                </div>
            </div>
        </>
    );
}

export default Dashboard;