import React, { use, useState } from 'react';

import Header from '../components/dashboard/Header';

import Sidebar from '../components/dashboard/Sidebar';

import { Outlet, useOutletContext } from 'react-router-dom';

const DashboardLayout = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {role} = useOutletContext<{role:string}>()
 
  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar onToggle={onToggle} role={role} isOpen={isOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggle={onToggle} role={role} />
        <main className="flex-1 overflow-y-auto">
         <Outlet context={{role}} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;