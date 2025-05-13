// components/UserActivity.tsx
'use client';

interface ActivityItem {
  username: string;
  message: string;
  timeAgo: string;
}

export default function UserActivity() {
  const activities: ActivityItem[] = [
    {
      username: "John Deo",
      message: "Lorem Ipsum is simply dummy text.",
      timeAgo: "2 min ago"
    },
    {
      username: "John Deo",
      message: "Lorem Ipsum is simply dummy text.",
      timeAgo: "2 min ago"
    },
    {
      username: "John Deo",
      message: "Lorem Ipsum is simply dummy text.",
      timeAgo: "2 min ago"
    },
    {
      username: "John Deo",
      message: "Lorem Ipsum is simply dummy text.",
      timeAgo: "2 min ago"
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">User Activity</h2>
      
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors">
            {/* Avatar */}
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">JD</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{activity.username}</h3>
                  <p className="text-gray-600 text-sm mt-1">{activity.message}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{activity.timeAgo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          View all Projects
        </button>
      </div>
    </div>
  );
}