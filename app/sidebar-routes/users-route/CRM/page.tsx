import Navbar from "../../../components/Navbar"
import Sidebar from "../../../components/Sidebar"

// Example for /app/analytics/page.tsx
export default function CrmPage() {
    return (
      <>
      <Sidebar/>
       <div className="flex-1 overflow-auto">
              <Navbar/>
              <main className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Stats Cards */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-gray-500 text-sm mb-2">Total Revenue</h3>
                      <p className="text-2xl font-bold">$45,231</p>
                      <span className="text-green-500 text-sm">+2.5% from last month</span>
                    </div>
                  ))}
                </div>
                
        <h1>CRM Page</h1>
                {/* Chart Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
                  <div className="h-96 bg-gray-50 rounded-lg">
                    {/* Add your chart here */}
                  </div>
                </div>
              </main>
            </div>
      </>
    )
  }