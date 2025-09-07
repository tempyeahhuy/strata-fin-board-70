import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Users, 
  FolderOpen, 
  BarChart3,
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { icon: FileText, label: "Create Invoice", color: "bg-primary hover:bg-primary-hover" },
  { icon: Users, label: "Add Contact", color: "bg-success hover:bg-success/90" },
  { icon: FolderOpen, label: "New Project", color: "bg-warning hover:bg-warning/90" },
  { icon: BarChart3, label: "Generate Report", color: "bg-secondary hover:bg-secondary-hover" }
];

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {/* Action buttons */}
      <div className={cn(
        "flex flex-col-reverse space-y-reverse space-y-3 mb-3 transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center space-x-3"
            style={{ 
              transitionDelay: isOpen ? `${index * 50}ms` : `${(actions.length - index) * 50}ms` 
            }}
          >
            {/* Label */}
            <div className="bg-background px-3 py-2 rounded-lg shadow-lg border border-dashboard-border">
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {action.label}
              </span>
            </div>
            
            {/* Action button */}
            <Button
              size="sm"
              className={cn(
                "h-12 w-12 rounded-full shadow-lg text-white",
                action.color
              )}
              onClick={() => setIsOpen(false)}
            >
              <action.icon className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <Button
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
          isOpen 
            ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground rotate-45" 
            : "bg-primary hover:bg-primary-hover text-primary-foreground"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </Button>
    </div>
  );
};