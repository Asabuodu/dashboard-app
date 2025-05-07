'use client';
import { useState } from 'react';
import { 
  CreditCardIcon,
  ServerStackIcon,
  HashtagIcon,
  CalendarDateRangeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export default function Tables() {
  const pathname = usePathname();
  const [isOpenBootstrapTable, setIsOpenBootstrapTable] = useState(false);
  const [isOpenDataTable, setIsOpenDataTable] = useState(false);
  const [isOpenDataTableExt, setIsOpenDataTableExt] = useState(false);
  const [isOpenHandsonTable, setIsOpenHandsonTable] = useState(false);

  const BootstrapTable = [
    { name: 'Default', href: '/default', icon: ChevronRightIcon  },
    { name: 'Users', href: '/users', icon: ChevronRightIcon  },
  ];

  const DataTable = [
    { name: 'Default', href: '/default', icon: ChevronRightIcon  },
    { name: 'Users', href: '/users', icon: ChevronRightIcon  },
  ];

  const DataTableExt = [
    { name: 'Default', href: '/default', icon: ChevronRightIcon  },
    { name: 'Users', href: '/users', icon: ChevronRightIcon  },
  ];

  const HandsonTable = [
    { name: 'PageLayout', href: '/page', icon: ChevronRightIcon  },
    { name: 'Navigation', href: '/navigation', icon: ChevronRightIcon  },
    { name: 'Widget', href:'/widget', icon: ChevronRightIcon  },
  ];

  // DropdownSection component to handle the dropdown functionality
  // and rendering of items
  const DropdownSection = ({ 
    title, 
    items, 
    isOpen, 
    setIsOpen, 
    Icon 
  }: {
    title: string;
    items: Array<{ name: string, href: string, icon: React.ElementType }>;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    Icon: React.ElementType;
  }) => (
    <div className="bg-blue-950 p-1">
      <div 
        className="flex items-center cursor-pointer p-2 hover:bg-blue-900 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Icon className="w-5 text-gray-50 mr-2 flex-shrink-0" />
        <h1 className="text-md font-light text-white flex-1">{title}</h1>
        <ChevronRightIcon 
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav className="ml-2 p-1">
          {items.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex text-xs items-center p-1 text-gray-300 hover:bg-blue-900 rounded-lg mb-1 transition-colors
                  ${isActive ? 'text-orange-400 bg-blue-900/50 font-medium' : ''}`}
              >
                <item.icon className="h-4 w-4 mr-2.5 text-current" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="">
      <div className="px-4 pt-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
          Tables
        </p>
      </div>

      <DropdownSection
        title="Bootstrap Table"
        items={BootstrapTable}
        isOpen={isOpenBootstrapTable}
        setIsOpen={setIsOpenBootstrapTable}
        Icon={CreditCardIcon}
      />

      <DropdownSection
        title="Data Table"
        items={DataTable}
        isOpen={isOpenDataTable}
        setIsOpen={setIsOpenDataTable}
        Icon={ServerStackIcon}
      />

      <DropdownSection
        title="Data Table Extension"
        items={DataTableExt}
        isOpen={isOpenDataTableExt}
        setIsOpen={setIsOpenDataTableExt}
        Icon={ServerStackIcon}
      />

        <Link 
          href="/sidebar-routes/users-route/animations" 
          className={`font-light text-xs items-center p-2 mr-4 flex hover:bg-blue-900 rounded-lg ${
            pathname === "/sidebar-routes/users-route/anomations" 
              ? 'text-orange-500 bg-blue-900' 
              : 'text-white'
          }`}
        > 
          <HashtagIcon className={`w-5 mr-3 ml-1.5 ${
            pathname === "/sidebar-routes/users-route/animations" 
              ? 'text-orange-500' 
              : 'text-gray-50'
          }`}/> 
          FooTable
          {/* <ChevronRightIcon  className="h-5 w-5 ml-14 text-gray-50"/> */}
        </Link>

      
        <DropdownSection
        title="Handson Table"
        items={HandsonTable}
        isOpen={isOpenHandsonTable}
        setIsOpen={setIsOpenHandsonTable}
        Icon={CalendarDateRangeIcon}
        />


    </div>
  );
}