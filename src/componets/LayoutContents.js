import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LayoutContents = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <div className='container-fluid d-flex flex-column pt-3 flex-grow-1'>
        <div className='d-flex justify-content-between'>
          <h1 className='text-secondary fs-1 font-normal cursor-pointer'>
            {/* {role === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'} */}
          </h1>
        </div>
        <div className='row g-3 mt-3 flex-grow-1'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutContents;
