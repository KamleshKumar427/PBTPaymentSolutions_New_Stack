import Navbar from "./Navbar";
import ExchangeRates from "./ExchangeRates";
import NewsAndDetails from "./NewsAndDetails";
import TransactionsBalance from "./TransactionsBalance";
import Footer from "./Footer";

import PaymentPageManagement from "../Pages/PaymentPage/PaymentPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {
    return (
        <div className={`DashboardContainer ${props.sidebarOpen ? 'open' : 'closed'}`}>
            {/* <Navbar /> */}
            <div className="DashContainer">
                <Routes>
                    <Route path='/' element={
                        <div>
                            <ExchangeRates />
                            <div className="DivSeparator">
                                <NewsAndDetails />
                                <TransactionsBalance />
                            </div>
                        </div>
                    } />
                    <Route path='/PaymentPage' element={
                        <PaymentPageManagement />
                    } />
                </Routes>
            </div>
            {/* Todo : set the Navbar to top bottom using CSS */}
            {/* <Footer /> */}
        </div>
    );
}

export default Dashboard;
