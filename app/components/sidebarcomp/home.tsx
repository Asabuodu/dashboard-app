

'use client';
import { useState } from 'react';
import { 
  HomeIcon,
  DocumentCheckIcon,
  WindowIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export default function Dashboard() {
  // usePathname hook to get the current pathname
  const pathname = usePathname();
  const [isOpenDashboard, setIsOpenDashboard] = useState(true);
  const [isOpenPagelayout, setIsOpenPagelayout] = useState(true);
  const [isOpenWidget, setIsOpenWidget] = useState(true);

  const DashboardComponents = [
    { name: 'Default', href: '/sidebar-routes/users-route/default', icon: ChevronRightIcon  },
    { name: 'CRM', href: '/sidebar-routes/users-route/crm', icon: ChevronRightIcon  },
    { name: 'Analytics', href: '/sidebar-routes/users-route/analytics', icon: ChevronRightIcon  },
  ];
  
  const PageLayoutComponents = [
    { name: 'Default', href: '/.', icon: ChevronRightIcon  },
    { name: 'Users', href: '/.', icon: ChevronRightIcon  },
  ];

  const WidgetComponents = [
    { name: 'PageLayout', href: '/.', icon: ChevronRightIcon  },
    { name: 'Navigation', href: '/.', icon: ChevronRightIcon  },
    { name: 'Widget', href:'/.', icon: ChevronRightIcon  },
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
          Navigations
        </p>
      </div>

      <DropdownSection
        title="Dashboard"
        items={DashboardComponents}
        isOpen={isOpenDashboard}
        setIsOpen={setIsOpenDashboard}
        Icon={HomeIcon}
      />

      <DropdownSection
        title="Page Layout"
        items={PageLayoutComponents}
        isOpen={isOpenPagelayout}
        setIsOpen={setIsOpenPagelayout}
        Icon={DocumentCheckIcon}
      />

        <Link 
          href="/sidebar-routes/users-route/animations" 
          className={`font-light text-xs items-center p-2 mr-4 flex hover:bg-blue-900 rounded-lg ${
            pathname === "/sidebar-routes/users-route/anomations" 
              ? 'text-orange-500 bg-blue-900' 
              : 'text-white'
          }`}
        > 
          <Bars3Icon className={`w-5 mr-3 ml-1.5 ${
            pathname === "/sidebar-routes/users-route/animations" 
              ? 'text-orange-500' 
              : 'text-gray-50'
          }`}/> 
          Navigation
          {/* <ChevronRightIcon  className="h-5 w-5 ml-14 text-gray-50"/> */}
        </Link>

      
        <DropdownSection
        title="Widget"
        items={WidgetComponents}
        isOpen={isOpenWidget}
        setIsOpen={setIsOpenWidget}
        Icon={WindowIcon}
        />


    </div>
  );
}