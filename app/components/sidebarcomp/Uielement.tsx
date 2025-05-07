
// 'use client';
// import { useState } from 'react';
// import { 
//    HomeIcon, 
// } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {  ChevronRightIcon } from '@heroicons/react/16/solid';

// export default function UIelement() {
//   const pathname = usePathname();
//   const [isOpenBasic, setIsOpenBasic] = useState(true);
//   const [isOpenAdvanced, setIsOpenAdvanced] = useState(true);

//   const navigation = [
//     { name: 'Default', href: '/default', icon: ChevronRightIcon},
    
//   ];

//   const Advanced = [
//     { name: 'CRM', href: '/CRM', icon: ChevronRightIcon },
//     { name: 'Analytics', href: '/analytics', icon: ChevronRightIcon  },
//     { name: 'PageLayout', href: '/page', icon: ChevronRightIcon },
//     { name: 'Navigation', href: '/navigation', icon: ChevronRightIcon },
//     { name: 'Widget', href:'/widget', icon: ChevronRightIcon},
    
//   ];

//   return (
//     <>
//     <div className="bg-blue-950 p-2  ">
//       <p className="text-gray-400 mb-4">UI Element</p>

//       {/* Dropdown Basic components and navigation links*/}
//       <div 
//         className="flex items-center cursor-pointer"
//         onClick={() => setIsOpenBasic(!isOpenBasic)}
//       ><HomeIcon className= "w-5 mb-4 text-gray-50"/>
//         <h1 className="text-md font-light mb-4 ml-2 mr-8 text-white">Basic Components</h1>
//         <ChevronRightIcon 
//           className={`h-5 w-5 mb-4 text-gray-50  transform transition-transform ${
//             isOpenBasic ? 'rotate-90' : ''
//           }`}
//         // className='h-5 w-5 text-gray-50'
//         />
//       </div>

//       {/* Collapsible Navigation */}
//       <div className={`overflow-hidden transition-all duration-300 ${
//         isOpenBasic ? 'max-h-96' : 'max-h-0'
//       }`}>
//         <nav>
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex text-xs items-center p-1 text-gray-200 hover:bg-blue-900 rounded-lg mb-2 transition-colors
//                 ${pathname === item.href ? ' text-orange-500' : ''}`}
//             >
//               <item.icon className="h-5 w-5 mr-3" />
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>
//            {/* Dropdown Basic components and navigation links ends*/}

//     </div>

//     <div>

//           {/* Dropdown Advanced components and navigation links start*/}
//           <div 
//         className="flex items-center cursor-pointer"
//         onClick={() => setIsOpenAdvanced(!isOpenAdvanced)}
//       ><HomeIcon className= "w-5 mb-4 text-gray-50"/>
//         <h1 className="text-md font-light mb-4 ml-2 mr-2 text-white">Advanced Components</h1>
//         <ChevronRightIcon 
//           className={`h-5 w-5 mb-4 text-gray-50  transform transition-transform ${
//             isOpenAdvanced ? 'rotate-90' : ''
//           }`}
//         // className='h-5 w-5 text-gray-50'
//         />
//       </div>

//       {/* Collapsible Navigation */}
//       <div className={`overflow-hidden transition-all duration-300 ${
//         isOpenAdvanced ? 'max-h-96' : 'max-h-0'
//       }`}>
//         <nav>
//           {Advanced.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex text-xs items-center p-1 text-gray-200 hover:bg-blue-900 rounded-lg mb-2 transition-colors
//                 ${pathname === item.href ? ' text-orange-500' : ''}`}
//             >
//               <item.icon className="h-5 w-5 mr-3" />
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Dropdown Basic components and navigation links ends*/}
//     </div>
//     </>
//   );
// }

'use client';
import { useState } from 'react';
import { 
  CubeIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, CogIcon, CubeTransparentIcon } from '@heroicons/react/16/solid';

export default function UIElement() {
  const pathname = usePathname();
  const [isOpenBasic, setIsOpenBasic] = useState(false);
  const [isOpenAdvanced, setIsOpenAdvanced] = useState(false);
  const [isOpenExtra, setIsOpenExtra] = useState(false);

  const basicComponents = [
    { name: 'Default', href: '/default', icon: ChevronRightIcon  },
    { name: 'Users', href: '/users', icon: ChevronRightIcon  },
  ];

  const advancedComponents = [
    { name: 'CRM', href: '/crm', icon: ChevronRightIcon  },
    { name: 'Analytics', href: '/analytics', icon: ChevronRightIcon  },
  ];

  const extraComponents = [
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
          UI Elements
        </p>
      </div>

      <DropdownSection
        title="Basic Components"
        items={basicComponents}
        isOpen={isOpenBasic}
        setIsOpen={setIsOpenBasic}
        Icon={CubeIcon}
      />

      <DropdownSection
        title="Advanced Components"
        items={advancedComponents}
        isOpen={isOpenAdvanced}
        setIsOpen={setIsOpenAdvanced}
        Icon={CubeTransparentIcon}
      />

      <DropdownSection
        title="Extra Components"
        items={extraComponents}
        isOpen={isOpenExtra}
        setIsOpen={setIsOpenExtra}
        Icon={GlobeAltIcon}
        />


        <Link 
          href="/sidebar-routes/users-route/animations" 
          className={`font-light text-xs items-center p-2 mr-4 flex hover:bg-blue-900 rounded-lg ${
            pathname === "/sidebar-routes/users-route/anomations" 
              ? 'text-orange-500 bg-blue-900' 
              : 'text-white'
          }`}
        > 
          <LifebuoyIcon className={`w-5 mr-3 ml-1.5 ${
            pathname === "/sidebar-routes/users-route/animations" 
              ? 'text-orange-500' 
              : 'text-gray-50'
          }`}/> 
          Animations
          {/* <ChevronRightIcon  className="h-5 w-5 ml-14 text-gray-50"/> */}
        </Link>

        <Link 
          href="/sidebar-routes/users-route/animations" 
          className={`font-light text-xs items-center p-2 mr-4 flex hover:bg-blue-900 rounded-lg ${
            pathname === "/sidebar-routes/users-route/anomations" 
              ? 'text-orange-500 bg-blue-900' 
              : 'text-white'
          }`}
        > 
          <CpuChipIcon className={`w-5 mr-3 ml-1.5 ${
            pathname === "/sidebar-routes/users-route/animations" 
              ? 'text-orange-500' 
              : 'text-gray-50'
          }`}/> 
          Sticky Notes
          {/* <ChevronRightIcon  className="h-5 w-5 ml-14 text-gray-50"/> */}
        </Link>

        <Link 
          href="/sidebar-routes/users-route/icons" 
          className={`font-light text-xs items-center p-2 mr-4 flex hover:bg-blue-900 rounded-lg ${
            pathname === "/sidebar-routes/users-route/anomations" 
              ? 'text-orange-500 bg-blue-900' 
              : 'text-white'
          }`}
        > 
          <CogIcon className={`w-5 mr-3 ml-1.5 ${
            pathname === "/sidebar-routes/users-route/icons" 
              ? 'text-orange-500' 
              : 'text-gray-50'
          }`}/> 
          Icons
          {/* <ChevronRightIcon  className="h-5 w-5 ml-14 text-gray-50"/> */}
        </Link>


    </div>
  );
}