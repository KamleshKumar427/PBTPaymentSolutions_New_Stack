import React, { useState, useEffect } from 'react';
import { FaBars, FaCreditCard, FaShoppingCart, FaUserFriends, FaTools, FaBalanceScale, FaCogs, FaStore, FaShieldAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';



const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // To identify where the website is loaded on mobile device or desktop

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsOpen(!mediaQuery.matches);
    props.setSidebarOpen(!mediaQuery.matches);
    // mediaQuery.addEventListener('change', handleResize);
    // return () => mediaQuery.removeEventListener('change', handleResize);
  },[])

  const [dropdowns, setDropdowns] = useState({
    account: false,
    transactions: false,
    balance: false,
    tools: false,
    services: false,
    risk: false,
    shops: false,
    settings: false,
  });

  const iconStyle = { color: '#92cdff' }
  const toggleSidebar = () => {
    props.setSidebarOpen(!props.sidebarOpen)
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const closeSidbar = () =>{
    setIsOpen(false);
    props.setSidebarOpen(false);
  }

  return (
    <div className='SidebarContainer'>
      <div className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>
        <FaBars/>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav className='sidebar-nav'>

          <div className='sidebar-item' >

            <div onClick={() => toggleDropdown('account')}>
              <FaUserFriends style={iconStyle} />
              {isOpen && <span >Account {dropdowns.account ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />} </span>}
            </div>
            {isOpen && dropdowns.account && (
              <div className="dropdown-menu">
                <NavLink to="/" onClick={closeSidbar}>Account Information</NavLink>
                <NavLink to="/" onClick={closeSidbar}>Profile Account</NavLink>
                {/* <NavLink to="/account-info">Account Information</NavLink>
              <NavLink to="/profile-account">Profile Account</NavLink>
              <NavLink to="/device-management">Device Management</NavLink>
              <NavLink to="/manage-limited-account">Manage Limited Account</NavLink> */}
              </div>
            )}

          </div>

          <div className='sidebar-item'  >
            <div>
              <FaCreditCard style={iconStyle} />
              {isOpen && <span >Transactions {dropdowns.transactions ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />} </span>}
            </div>

          </div>
          <div className='sidebar-item'>
            <div>
              <FaBalanceScale style={iconStyle} />
              {isOpen && <span >Balance {dropdowns.balance ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />} </span>}
            </div>
          </div>
          <div className='sidebar-item'>
            <div>
              <FaTools style={iconStyle} />
              {isOpen && <span >Tools {dropdowns.tools ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />}</span>}
            </div>
          </div>
          <div className='sidebar-item'>
            <div>
              <FaCogs style={iconStyle} />
              {isOpen && <span >Services {dropdowns.services ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />}</span>}
            </div>
          </div>
          <div className='sidebar-item'>
            <div>
              <FaShieldAlt style={iconStyle} />
              {isOpen && <span >Risk {dropdowns.risk ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />}</span>}
            </div>
          </div>
          <div className='sidebar-item'>
            <div>
              <FaStore style={iconStyle} />
              {isOpen && <span >Shops {dropdowns.shops ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />}</span>}
            </div>
          </div>
          <div className='sidebar-item'>
            <div>
              <div onClick={() => toggleDropdown('settings')}>
                <FaCogs style={iconStyle} />
                {isOpen && <span >Settings {dropdowns.settings ? <FaAngleUp style={iconStyle} /> : <FaAngleDown style={iconStyle} />}</span>}
              </div>

              {isOpen && dropdowns.settings && (
                <div className="dropdown-menu">
                  <NavLink to="/PaymentPage" onClick={closeSidbar}>Payment Page</NavLink>
                  {/* <NavLink to="/profile-account">Profile Account</NavLink>
                <NavLink to="/device-management">Device Management</NavLink> */}
                  <NavLink to="/" onClick={closeSidbar}>Other Settings</NavLink>
                </div>
              )}
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default Sidebar;