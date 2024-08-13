import React, { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Importing Sidebar and Header with React.lazy
const Sidebar = React.lazy(() => import('./componets/Sidebar'));
const Header = React.lazy(() => import('./componets/Header'));

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Suspense >
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
          <Header open={open} setOpen={setOpen} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
