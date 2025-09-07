import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  X 
} from "lucide-react";

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "warning",
    title: "Invoice Overdue",
    message: "Invoice #INV-2024-001 from Acme Corp is 5 days overdue",
    time: "2 hours ago",
    isRead: false
  },
  {
    id: "2", 
    type: "success",
    title: "Payment Received",
    message: "$5,200 payment received from TechStart Inc",
    time: "3 hours ago",
    isRead: false
  },
  {
    id: "3",
    type: "info",
    title: "New Project Created",
    message: "Project 'Website Redesign' has been added to your dashboard",
    time: "5 hours ago",
    isRead: true
  },
  {
    id: "4", 
    type: "error",
    title: "Payment Failed",
    message: "Automatic payment to supplier failed - insufficient funds",
    time: "1 day ago",
    isRead: true
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success': return <CheckCircle className="h-4 w-4 text-success" />;
    case 'warning': return <AlertCircle className="h-4 w-4 text-warning" />;
    case 'error': return <AlertCircle className="h-4 w-4 text-destructive" />;
    default: return <Bell className="h-4 w-4 text-primary" />;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'success': return 'border-l-success bg-success/5';
    case 'warning': return 'border-l-warning bg-warning/5';
    case 'error': return 'border-l-destructive bg-destructive/5';
    default: return 'border-l-primary bg-primary/5';
  }
};

export const NotificationsPanel = () => {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <Card className="dashboard-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-primary" />
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground text-xs">
              {unreadCount}
            </Badge>
          )}
        </CardTitle>
        <Button variant="ghost" size="sm">
          Mark all read
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border-l-4 ${getNotificationColor(notification.type)} ${
              !notification.isRead ? 'opacity-100' : 'opacity-60'
            } transition-opacity`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-sm text-card-foreground">
                      {notification.title}
                    </h4>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{notification.time}</span>
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground">
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-dashboard-border">
          <Button variant="outline" className="w-full" size="sm">
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};