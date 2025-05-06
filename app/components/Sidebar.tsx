'use client'; // Add this at the top to make it a client component

// import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon, TableCellsIcon, DocumentCheckIcon, MapIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
//import Link from 'next/link';
// import { usePathname } from 'next/navigation';

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
      
      {/* <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-50">Dashboard</h1>
      </div>
      <nav>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center p-3 text-gray-200 hover:bg-blue-900 rounded-lg mb-2 transition-colors
              ${pathname === item.href ? 'bg-blue-900 text-white' : ''}`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav> */}
    </div>
  );
}