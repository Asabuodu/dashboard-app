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
           
                
        <h1>CRM Page</h1>
                {/* Chart Section */}
         
              </main>
            </div>
      </>
    )
  }