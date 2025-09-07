import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { FloatingActionButton } from "./widgets/FloatingActionButton";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="flex">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggleCollapsed={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
        
        <div className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}>
          <TopNavigation onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
          
          <main className="p-6 bg-dashboard-surface min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </div>
      </div>
      
      {/* Floating Action Button for mobile */}
      <FloatingActionButton />
    </div>
  );
};