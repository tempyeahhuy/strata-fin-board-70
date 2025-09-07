import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Users, 
  FolderOpen, 
  BarChart3, 
  CreditCard,
  Mail,
  Calendar
} from "lucide-react";

const quickActions = [
  {
    title: "Create Invoice",
    description: "Generate a new invoice for clients",
    icon: <FileText className="h-5 w-5" />,
    color: "bg-primary hover:bg-primary-hover text-primary-foreground"
  },
  {
    title: "Add New Project", 
    description: "Start tracking a new project",
    icon: <FolderOpen className="h-5 w-5" />,
    color: "bg-success hover:bg-success/90 text-success-foreground"
  },
  {
    title: "Manage Contacts",
    description: "Add or edit customer contacts", 
    icon: <Users className="h-5 w-5" />,
    color: "bg-warning hover:bg-warning/90 text-warning-foreground"
  },
  {
    title: "Generate Report",
    description: "Create financial reports",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "bg-secondary hover:bg-secondary-hover text-secondary-foreground"
  }
];

const additionalActions = [
  {
    title: "Process Payment",
    icon: <CreditCard className="h-4 w-4" />
  },
  {
    title: "Send Reminder",
    icon: <Mail className="h-4 w-4" />
  },
  {
    title: "Schedule Meeting",
    icon: <Calendar className="h-4 w-4" />
  }
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      {/* Main Quick Actions */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="dashboard-card dashboard-card-hover cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                  {action.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Actions Sidebar */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5 text-primary" />
            <span>More Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {additionalActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start space-x-3 h-auto p-3 hover:bg-card-hover"
            >
              {action.icon}
              <span className="text-sm">{action.title}</span>
            </Button>
          ))}
          
          <div className="pt-4 border-t border-dashboard-border">
            <Button className="w-full" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Custom Action
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};