import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Navbar />
        <main className="p-8">
    
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4">This is a simple dashboard layout using Tailwind CSS.</p>
          <p className="mt-4">You can add your content here.</p>
          <p className="mt-4">Feel free to customize it as per your needs.</p>
          <p className="mt-4">This is a simple dashboard layout using Tailwind CSS.</p>
          <p className="mt-4">You can add your content here.</p>S
        </main>
      </div>
    </>
  )
}