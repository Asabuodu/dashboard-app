

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm p-4 flex items-center justify-between pr-12 md:pr-4 ">
      <div className="text-gray-600">Welcome back, User!</div>
      <div className="flex items-center mr-4 md:mr-0">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          🔔
        </button>
        <div className="ml-4 w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}