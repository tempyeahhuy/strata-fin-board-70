import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Circle, 
  Target, 
  Calendar,
  Plus,
  TrendingUp
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

interface Goal {
  id: string;
  title: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Review Q1 financial reports",
    completed: false,
    priority: "high",
    dueDate: "Today"
  },
  {
    id: "2",
    title: "Send invoices to pending clients",  
    completed: false,
    priority: "high",
    dueDate: "Tomorrow"
  },
  {
    id: "3",
    title: "Update product inventory",
    completed: true,
    priority: "medium", 
    dueDate: "Yesterday"
  },
  {
    id: "4",
    title: "Schedule team meeting",
    completed: false,
    priority: "low",
    dueDate: "This week"
  }
];

const goals: Goal[] = [
  {
    id: "1",
    title: "Monthly Revenue",
    current: 78500,
    target: 100000,
    unit: "$",
    color: "bg-primary"
  },
  {
    id: "2", 
    title: "New Customers",
    current: 23,
    target: 30,
    unit: "",
    color: "bg-success"
  },
  {
    id: "3",
    title: "Project Completion",
    current: 7,
    target: 10,
    unit: "",
    color: "bg-warning"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive text-destructive-foreground';
    case 'medium': return 'bg-warning text-warning-foreground';
    case 'low': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const TasksAndGoals = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Tasks */}
      <Card className="dashboard-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Recent Tasks</span>
          </CardTitle>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Task
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card-hover transition-colors">
              <button className="flex-shrink-0">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground hover:text-primary" />
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${
                  task.completed ? 'line-through text-muted-foreground' : 'text-card-foreground'
                }`}>
                  {task.title}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t border-dashboard-border">
            <Button variant="outline" className="w-full" size="sm">
              View All Tasks
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Goals & Targets */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <span>Goals & Targets</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {goals.map((goal) => {
            const percentage = Math.round((goal.current / goal.target) * 100);
            
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-card-foreground">
                    {goal.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {goal.unit}{goal.current.toLocaleString()} / {goal.unit}{goal.target.toLocaleString()}
                  </span>
                </div>
                
                <Progress value={percentage} className="h-2" />
                
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{percentage}% complete</span>
                  <span className="flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    On track
                  </span>
                </div>
              </div>
            );
          })}
          
          <div className="pt-4 border-t border-dashboard-border">
            <Button variant="outline" className="w-full" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add New Goal
            </Button>
          </div>
        </CardContent>  
      </Card>
    </div>
  );
};