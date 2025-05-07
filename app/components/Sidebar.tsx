'use client'; // Add this at the top to make it a client component

import Dashboard from './sidebarcomp/home';
import Formelement from './sidebarcomp/forms';
import Tables from './sidebarcomp/Tables';
import UIelement from './sidebarcomp/Uielement';
// import Users from './sidebarcomp/User';

export default function Sidebar() {

  return (
    <div className=" bg-blue-950 shadow-lg scroll-auto overflow-y-auto h-screen text-xs">

      < Dashboard />
      <UIelement />
      <Formelement />
      <Tables/>
      {/* <Users/> */}
    </div>
  );
}