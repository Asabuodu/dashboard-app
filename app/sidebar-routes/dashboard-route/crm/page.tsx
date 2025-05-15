import { Barchat } from "@/app/components/cards/crmcards/barchat"
import Navbar from "../../../components/Navbar"
import Sidebar from "../../../components/Sidebar"
import { Calendar } from "@/components/ui/calendar"
import { Areacard } from "@/app/components/cards/crmcards/areacard"

// Example for /app/analytics/page.tsx
export default function CrmPage() {
    return (
      <>
      <Sidebar/>
       <div className="flex-1 overflow-auto bg-gray-300">
              <Navbar/>
              <main className="">
           
                
        <h1>CRM Page</h1>
                {/* Chart Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ">
            {/* card 1 */}
            <div className="">1</div>

            {/* card 2 */}
            
            <div className="bg-white rounded-lg ms-auto center">
              <Calendar/>
            </div>
            {/* card 3 */}
            <div className="">3</div>
            {/* card 4 */}
            <div className="">4</div>
            {/* card 5 */}
            <div className="">5</div>
            {/* card 6 */}
            <div className="">6</div>

            {/* card 7 */}
            <div className="col-span-2">7
              <Areacard/>
            </div>
            {/* card 8 */}
            <div className="">1</div>
            {/* card 9 */}
            <div className="">2</div>
            {/* card 10 */}
            <div className="col-span-1.5">3</div>
          {/* card 11 */}
            <div className="">


          <Barchat/>
            </div>
          </div>
              </main>
            </div>
      </>
    )
  }