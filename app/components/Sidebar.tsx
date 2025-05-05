'use client'; // Add this at the top to make it a client component

// import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon, TableCellsIcon, DocumentCheckIcon, MapIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
//import Link from 'next/link';
// import { usePathname } from 'next/navigation';

import Dashboard from './sidebarcomp/Dashboard';
import Formelement from './sidebarcomp/forms';
import UIelement from './sidebarcomp/Uielement';

export default function Sidebar() {
  // const pathname = usePathname();

  // const navigation = [
  //   { name: 'Home', href: '/', icon: HomeIcon },
  //   { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  //   { name: 'Users', href: '/users', icon: UsersIcon },
  //   { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  //   { name: 'Form Stuff', href: '/form', icon: DocumentCheckIcon },
  //   {name: 'Data Table', href: '/data', icon: TableCellsIcon},
  //   {name: 'Google Maps', href: '/maps', icon: MapIcon },
  //   {name: 'Extral Pages', href: '/extra', icon: DocumentDuplicateIcon},
  //   // Add more navigation items as needed
  // ];

  return (
    <div className=" bg-blue-950 shadow-lg scroll-auto overflow-y-auto h-screen text-xs">

      < Dashboard />
      <UIelement />
      <Formelement />
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