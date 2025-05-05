
'use client';
import { useState } from 'react';
import { 
  HomeIcon, 
  // ChartBarIcon, 
  UsersIcon, 
  Cog6ToothIcon, 
//   TableCellsIcon, 
//   DocumentCheckIcon, 
//   MapIcon, 
//   DocumentDuplicateIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {  ChevronRightIcon } from '@heroicons/react/16/solid';

export default function UIelement() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Default', href: '/default', icon: ChevronRightIcon},
    { name: 'CRM', href: '/CRM', icon: ChevronRightIcon },
    { name: 'Analytics', href: '/analytics', icon: ChevronRightIcon  },
    { name: 'Users', href: '/users', icon: UsersIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
    // { name: 'Form Stuff', href: '/form', icon: DocumentCheckIcon },
    // { name: 'Data Table', href: '/data', icon: TableCellsIcon },
    // { name: 'Google Maps', href: '/maps', icon: MapIcon },
    // { name: 'Extra Pages', href: '/extra', icon: DocumentDuplicateIcon },
    // { name: 'Users', href: '/users', icon: UsersIcon },
  ];

  return (
    <div className="bg-blue-950 p-2 w-40 overflow-y-auto ">
      <p className="text-gray-400 mb-4">UI Element</p>
      {/* Dropdown Header */}
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-md font-extralight mb-4 text-white">Dashboard</h1>
        <ChevronRightIcon 
        //   className={`h-5 w-5 text-gray-50 transform transition-transform ${
        //     isOpen ? 'rotate-180' : ''
        //   }`}
        className='h-5 w-5 text-gray-50'
        />
      </div>

      {/* Collapsible Navigation */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex text-xs items-center p-1 text-gray-200 hover:bg-blue-900 rounded-lg mb-2 transition-colors
                ${pathname === item.href ? ' text-orange-500' : ''}`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}