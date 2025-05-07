// "use client";
// import { BarChart, Bar, ResponsiveContainer } from 'recharts';
// import { useEffect, useState } from 'react';
// import { Clock4Icon } from 'lucide-react';

// const chartData = [
//   { name: 'Q1', value: 4000 },
//   { name: 'Q2', value: 5000 },
//   { name: 'Q3', value: 3000 },
//   { name: 'Q4', value: 2780 },
// ];

// export function ViewsCard() {
//   const [currentTime, setCurrentTime] = useState<string>('');

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const timeString = now.toLocaleTimeString('en-US', {
//         hour: 'numeric',
//         minute: '2-digit',
//         hour12: true
//       });
//       setCurrentTime(timeString.toLowerCase());
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <p className="text-2xl font-medium">290+</p>
//           <p className="text-xs mt-3">Page Views</p>
//         </div>
        
//         {/* Chart Container replacing the icon */}
//         <div className="w-25 h-15 -mr-2 mt-2">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={chartData}>
//               <Bar 
//                 dataKey="value" 
//                 fill="#ffffff" 
//                 radius={[4, 4, 0, 0]}
//                 barSize={12}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <hr className="border-white mb-4 w-77 -ml-4" />

//       <div className="flex  items-center text-xs">
//         {/* <span>Last 30 Days</span> */}
//        <Clock4Icon className='mr-2'/> <span>Updated: {currentTime}</span>
//       </div>
//     </div>
//   );
// }



"use client";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { Clock4Icon } from 'lucide-react';

const chartData = [
  { name: 'Q1', value: 1500 },
  { name: 'Q2', value: 4000 },
  { name: 'Q3', value: 3000 },
  { name: 'Q4', value: 2780 },
];

export function ViewsCard() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" p-4 rounded-lg text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-2xl font-medium">290+</p>
          <p className="text-xs mt-3">Page Views</p>
        </div>
        
        {/* Chart Container replacing the icon */}
        <div className="w-25 h-15 -mr-2 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <Bar 
                dataKey="value" 
                fill="#ffffff" 
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="border-white mb-4" />

      <div className="flex  items-center text-xs">
        {/* <span>Last 30 Days</span> */}
       <Clock4Icon className='mr-2 w-4'/> <span>Updated: {currentTime}</span>
      </div>
    </div>
  );
}