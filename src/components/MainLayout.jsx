import React from 'react';

const MainLayout = ({ children, role = "Admin" }) => {
  // These labels match your Figma "Master" sidebar exactly
  const sidebarItems = [
    "DASHBOARD", "PROFILE", "RESOURCES", "NOTICE", 
    "UPLOAD", "TIME TABLE", "CALENDER", "HELP"
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - The Master "Chassis" */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold text-red-600 border-b">
          MUniverse
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item}>
                <a href="#" className="block p-3 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="text-sm font-medium text-gray-500">
            University Intranet Portal / <span className="text-gray-900">{role} Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
              AD
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;