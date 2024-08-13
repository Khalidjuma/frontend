import React, { useState } from 'react';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import { BsArrowLeftShort } from 'react-icons/bs';
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Header = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem('email');
  const [email, setEmail] = useState(storedEmail);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className='flex items-center justify-between h-[80px] shadow-lg px-[25px] bg-white'>
      <div className='flex items-center gap-[15px]'>
        <FiAlignJustify
          className={`fs-3 cursor-pointer text-black ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex items-center rounded-[5px] flex-1 max-w-full mt-3 mb-4'>
          <input
            type='text'
            className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-full max-w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal'
            placeholder='Search for...... '
          />
          <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-br-[5px] rounded-tr-[5px]'>
            <FaSearch color='white' />
          </div>
        </div>
      </div>

      <div className='flex items-center gap-[15px] relative mt-3'>
        <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
          <FaRegBell />
          <FaEnvelope />
        </div>

        <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
          <p className='hidden sm:block'>{email}</p>
          <div className='h-[50px] w-[50px] justify-center cursor-pointer flex items-center rounded-full bg-[#4E73DF]'>
            {/* Placeholder for profile image */}
          </div>

          {dropdownOpen && (
            <div className='bg-white border h-[150px] w-[150px] absolute top-[60px] right-0 pt-[15px] pl-[15px] space-y-[10px] shadow-lg'>
              <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
              <p className='cursor-pointer hover:text-[blue] font-semibold'>Setting</p>
              <p className='cursor-pointer hover:text-[blue] font-semibold' onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
