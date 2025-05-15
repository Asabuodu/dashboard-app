// components/LatestUpdates.tsx
'use client';

interface UpdateItem {
  time: string;
  text: string;
  status?: 'success' | 'warning' | 'info';
}

export default function LatestUpdates() {
  const updates: UpdateItem[] = [
    {
      time: "4 hrs ago",
      text: "+ 5 New Products were added!",
      status: "success",
    },
    {
      time: "6 hrs ago",
      text: "Profile Picture Updated!",
      status: "success"
    },
    {
      time: "18 day ago",
      text: "Database backup completed!",
      status: "info"
    },
    {
      time: "1 day ago",
      text: "Congratulations!",
      status: "warning"
    }
  ];

  const contactInfo = [
    { label: "Email", value: "jeny@gmail.com" },
    { label: "Phone", value: "0023-333-526136" }
  ];

  return (

      // <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4 h-96 mb-10 flex flex-col"> 

      <div className="p-4 mt-24 grid grid-cols-2 gap-6"> 

      {/* Updates List */}
      <div className="space-y-6 mb-8 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Latest Updates</h2>
        {updates.map((update, index) => (
          <div key={index} className="flex gap-4">
                <span className="text-sm text-gray-500 mr-2 w-20 whitespace-nowrap">
                  {update.time}
                </span>
            {/* Status Indicator */} 
            
            <div className={`w-2 h-2 mt-2 rounded-full 
              ${update.status === 'success' ? 'bg-green-500' : 
                 update.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`}
            />
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="text-gray-600">{update.text}</span>
                {/* <span className="text-sm text-gray-500 whitespace-nowrap">
                  {update.time}
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information Section */}
      <div className="border-gray-100  h-11/12 bg-white rounded-lg shadow-sm ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-11/12 xl:grid-cols-4">

          <div className="rounded-lg flex items-center text-center mb-4 mr-7 bg-green-300 col-span-2  ">
            <p>image</p>
          </div>

          <div className="items-center p-6 mb-4 col-span-2">

            <h3 className="text-sm font-semibold text-gray-600 mb-2">Information</h3>
            <hr />
        
            <div className="space-y-3 mt-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-500">{info.label}:</span>
                  <span className="text-gray-700">{info.value}</span>
                </div>
              ))}
            </div>
            </div>

        </div>
      </div>

      {/* <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          View All Updates
        </button>
      </div> */}

      </div>
    // </div>
  );
}