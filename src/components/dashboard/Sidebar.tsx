import { 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  Package, 
  Star, 
  UserCheck, 
  Settings, 
  FileText,
  ChevronLeft 
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapsed: () => void;
}

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Products", href: "/products", icon: Package },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Teams", href: "/teams", icon: UserCheck },
  { name: "Integrations", href: "/integrations", icon: Settings },
  { name: "Files", href: "/files", icon: FileText },
];

export const Sidebar = ({ collapsed, onToggleCollapsed }: SidebarProps) => {
  return (
    <div className={cn(
      "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo/Brand */}
      <div className="flex items-center justify-between h-20 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AF</span>
            </div>
            <span className="font-semibold text-sidebar-foreground">AdminFlow</span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapsed}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform duration-200",
            collapsed && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground"
                  )
                }
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      {!collapsed && (
        <div className="absolute bottom-6 left-3 right-3">
          <div className="bg-dashboard-accent p-4 rounded-lg">
            <p className="text-xs text-sidebar-foreground/70">
              Need help?
            </p>
            <p className="text-sm font-medium text-sidebar-foreground mt-1">
              Contact Support
            </p>
          </div>
        </div>
      )}
    </div>
  );
};