import { HomeIcon, ChartBarIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav>
        {[
          { name: 'Home', icon: HomeIcon },
          { name: 'Analytics', icon: ChartBarIcon },
          { name: 'Users', icon: UsersIcon },
          { name: 'Settings', icon: Cog6ToothIcon },
        ].map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  )
}