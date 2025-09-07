import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowUpRight, ArrowDownLeft, Eye } from "lucide-react";

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  category: string;
}

const transactions: Transaction[] = [
  {
    id: "TXN-001",
    type: "income",
    description: "Payment from Acme Corp",
    amount: 12500,
    date: "2024-01-15",
    status: "completed",
    category: "Sales"
  },
  {
    id: "TXN-002", 
    type: "expense",
    description: "Office Supplies - Staples",
    amount: 245,
    date: "2024-01-14",
    status: "completed",
    category: "Office"
  },
  {
    id: "TXN-003",
    type: "income", 
    description: "Consulting Services - TechStart",
    amount: 8750,
    date: "2024-01-14",
    status: "pending",
    category: "Consulting"
  },
  {
    id: "TXN-004",
    type: "expense",
    description: "Software License - Adobe",
    amount: 599,
    date: "2024-01-13",
    status: "completed",
    category: "Software"
  },
  {
    id: "TXN-005",
    type: "income",
    description: "Product Sales - Online Store",
    amount: 3420,
    date: "2024-01-13",
    status: "completed",
    category: "E-commerce"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-success text-success-foreground';
    case 'pending': return 'bg-warning text-warning-foreground';
    case 'failed': return 'bg-destructive text-destructive-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const RecentTransactions = () => {
  return (
    <Card className="dashboard-card mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-primary" />
          <span>Recent Transactions</span>
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-card-hover/50 hover:bg-card-hover transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'income' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownLeft className="h-4 w-4" />
                  )}
                </div>
                
                <div>
                  <p className="font-medium text-card-foreground">
                    {transaction.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-muted-foreground">
                      {transaction.date}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {transaction.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-success' : 'text-destructive'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <Badge className={`text-xs ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </Badge>
                </div>
                
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};