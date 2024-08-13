import React, { useState } from 'react';
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUsers, FaBookReader, FaBookOpen } from 'react-icons/fa';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, setOpen }) => {
  const storedRole = localStorage.getItem('storedRole');
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getMenus = () => {
    if (storedRole === 'Student') {
      return [
        // { title: "Student Dashboard", icon: <RiDashboardFill />, path: "/app" },
        { title: "UserProfile", icon: <RiDashboardFill />, path: "/app/profile" },
        { title: "Appoitment", icon: <RiDashboardFill />, path: "/app/appointment" }
      
      ];
    }
   else if(storedRole === 'Staff'){

    return [
      { title: "Staff Dashboard", icon: <RiDashboardFill />, path: "/app" }
    ];

  }    
    else {
      return [
        { title: "Admin Dashboard", icon: <RiDashboardFill />, path: "/app" },
        { title: "A.List", icon: <RiDashboardFill />, path: "/app/list" },
        { title: "AddStaff", icon: <RiDashboardFill />, path: "/app/staffAdd" },
        { title: "StaffList", icon: <RiDashboardFill />, path: "/app/staffList" }
        
        
      ];
    }
  };

  const Menus = getMenus();

  return (
    <div className={`bg-dark text-white min-vh-100 ${open ? "w-150px" : "w-60px"} transition-width`}>
      <div className="d-flex justify-content-between p-3 align-items-center">
        <div className="d-flex align-items-center">
          {open && <span className="fs-5 ms-2">S A SYSTEM</span>}
        </div>
        {/* <BsArrowLeftShort
          className={`fs-3 cursor-pointer text-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
      </div>
      <ul className="nav flex-column">
        {Menus.map((menu, index) => (
          <li key={index} className="nav-item position-relative">
            <div className="d-flex flex-column">
              <Link
                to={menu.path}
                onClick={() => menu.submenu && toggleSubmenu(index)}
                className={`nav-link d-flex mb-2 align-items-center text-white py-2 px-3 ${open ? "ps-3" : "justify-content-center"} ${submenuOpen[index] ? "bg-secondary" : ""}`}
              >
                <span className="fs-4">{menu.icon}</span>
                {open && <span className="ms-2">{menu.title}</span>}
                {menu.submenu && open && (
                  <BsArrowLeftShort
                    className={`ms-auto transition-transform text-white ${submenuOpen[index] ? "rotate-90" : ""}`}
                  />
                )}
              </Link>
              {menu.submenu && open && submenuOpen[index] && (
                <ul className="nav flex-column ms-4" style={{ display: submenuOpen[index] ? 'block' : 'none' }}>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li key={subIndex} className="nav-item mb-1">
                      <Link to={submenuItem.path} className="nav-link text-white py-2 px-3 rounded bg-dark">
                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
