import Navbar from "../../../components/Navbar"
import Sidebar from "../../../components/Sidebar"

// Example for /app/analytics/page.tsx
export default function AnalyticsPage() {
    return (
      <>
      <Sidebar/>
       <div className="flex-1 overflow-auto">
              <Navbar/>
              <main className="p-8">
                
                
        <h1>Analytics Page</h1>
                {/* Chart Section */}
            
              </main>
            </div>
      </>
    )
  }