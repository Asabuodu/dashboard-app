// import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

// export default function Sidebar() {
//   return (
//     <div className="w-50 bg-blue-950 shadow-lg p-4 scroll-auto overflow-y-auto h-screen">
//       <div className="mb-8">
//         <h1 className="text-xl font-bold text-gray-50">Dashboard</h1>
//       </div>
//       <nav >
//         {[
//           { name: 'Home', icon: HomeIcon },
//           { name: 'Analytics', icon: ChartBarIcon },
//           { name: 'Users', icon: UsersIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//           { name: 'Settings', icon: Cog6ToothIcon },
//         ].map((item) => (
//           <a
//             key={item.name}
//             href="#"
//             className="flex items-center p-3 text-gray-60 hover:bg-gray-500 rounded-lg mb-2"
//           >
//             <item.icon className="h-5 w-5 mr-3" />
//             {item.name}
//           </a>
//         ))}
//       </nav>
//     </div>
//   )
// }




'use client'; // Add this at the top to make it a client component

import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Users', href: '/users', icon: UsersIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
    // Add more navigation items as needed
  ];

  return (
    <div className="w-50 bg-blue-950 shadow-lg p-4 scroll-auto overflow-y-auto h-screen">
      <div className="mb-8">
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
      </nav>
    </div>
  );
}