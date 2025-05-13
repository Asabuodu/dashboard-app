// import { ChartBarIcon } from "@heroicons/react/24/outline"
import { ViewsCard } from "@/app/components/cards/viewscard"
import Navbar from "../../../components/Navbar"
import Sidebar from "../../../components/Sidebar"
import { EarningsCard } from "@/app/components/cards/earningcard"
import { TaskCard } from "@/app/components/cards/taskcard"
import { DownloadCard } from "@/app/components/cards/downloadcard"
import { SalesCard } from "@/app/components/cards/salescard"
import { DonutChart } from "@/app/components/cards/donutchart"
import Appsalescard from "@/app/components/cards/appsalescard"
import UserActivity from "@/app/components/cards/useractcard"
import LatestUpdates from "@/app/components/cards/latestupdate"

// Example for /app/analytics/page.tsx
export default function DefaultPage() {
    return (
      <>
      <Sidebar/>
       <div className="flex-1 overflow-auto">
              <Navbar/>
              <main className="p-8">
           
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {/* Columns */}
          {/* 1str card */}
          {/* bg-gradient-to-r from-green-400 to-blue-500 */}
          <div className=" bg-gradient-to-r from-orange-400 to-orange-300 p-4 rounded-lg">
            <EarningsCard/>
          </div>
        
        {/* 2nd card */}
          <div className="bg-gradient-to-r from-green-400 to-green-300 p-4 rounded-lg">
            <ViewsCard/>
             {/* <EarningsCard/> */}
          </div>

        {/* 3rd card */}
          <div className="bg-gradient-to-r from-red-400 to-red-300 p-4 rounded-lg">
            <TaskCard/>
          </div>

          {/* 4th card */}
          <div className="bg-gradient-to-r  from-blue-400 to-blue-300 p-4 rounded-lg">
            <DownloadCard/>
          </div>
        </div>
<br />

        {/* sales Analytics */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-96 mb-20">
          <div className="rounded-lg col-span-3">
            <SalesCard/>
          </div>
          <div className="rounded-lg">
            <DonutChart/>
             </div>
        </div>
<br />

        {/* application sales and user activities */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 h-96 mb-10">
          <div className="rounded-lg col-span-2">
            <Appsalescard/>
          </div>
          <div className="rounded-lg">
              <UserActivity/>
             </div>
        </div>
 <br />

        {/* latest update and user information */}


        <LatestUpdates/>


              </main>
            </div>
      </>
    )
  }


