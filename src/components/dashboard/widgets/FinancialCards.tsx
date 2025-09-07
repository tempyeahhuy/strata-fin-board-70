import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, DollarSign, CreditCard, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface FinancialCardProps {
  title: string;
  amount: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  description?: string;
}

const FinancialCard = ({ title, amount, change, changeType, icon, description }: FinancialCardProps) => (
  <Card className="dashboard-card dashboard-card-hover">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-card-foreground/70">
        {title}
      </CardTitle>
      <div className="h-8 w-8 text-primary">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-card-foreground">{amount}</div>
      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
        {changeType === 'increase' ? (
          <ArrowUpIcon className="h-3 w-3 text-success" />
        ) : (
          <ArrowDownIcon className="h-3 w-3 text-destructive" />
        )}
        <span className={cn(
          changeType === 'increase' ? 'text-success' : 'text-destructive'
        )}>
          {change}
        </span>
        <span>from last month</span>
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </CardContent>
  </Card>
);

export const FinancialCards = () => {
  const financialData = [
    {
      title: "Revenue (Month)",
      amount: "$89,341",
      change: "+23.1%", 
      changeType: 'increase' as const,
      icon: <DollarSign className="h-4 w-4" />,
      description: "Total monthly revenue"
    },
    {
      title: "Cash on Hand",
      amount: "$127,584",
      change: "+15.3%",
      changeType: 'increase' as const,
      icon: <Wallet className="h-4 w-4" />,
      description: "Available cash balance"
    },
    {
      title: "Net Profit",
      amount: "$34,892",
      change: "+18.7%",
      changeType: 'increase' as const,
      icon: <TrendingUp className="h-4 w-4" />,
      description: "After tax profit"
    },
    {
      title: "Outstanding Invoices",
      amount: "127",
      change: "-5.4%",
      changeType: 'decrease' as const,
      icon: <CreditCard className="h-4 w-4" />,
      description: "Unpaid customer invoices"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {financialData.map((data, index) => (
        <FinancialCard key={index} {...data} />
      ))}
    </div>
  );
};