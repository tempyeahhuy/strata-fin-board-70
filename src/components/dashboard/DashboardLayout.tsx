import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { FloatingActionButton } from "./widgets/FloatingActionButton";
import { useFont } from "@/hooks/useFont";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentFont } = useFont();

  return (
    <div className={`min-h-screen bg-background ${currentFont.class}`}>
      <div className="flex">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggleCollapsed={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
        
        <div className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}>
          <TopNavigation onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
          
          <main className="flex-1 p-6 bg-dashboard-surface overflow-auto">
            {children}
          </main>
        </div>
      </div>
      
      {/* Floating Action Button for mobile */}
      <FloatingActionButton />
    </div>
  );
};