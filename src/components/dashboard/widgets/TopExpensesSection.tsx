import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, PieChart as PieChartIcon, BarChart3, ArrowDown } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const topExpensesData = [
  { category: 'Salaries & Benefits', amount: 28000, percentage: 48.3, color: 'hsl(var(--primary))' },
  { category: 'Office Rent', amount: 8500, percentage: 14.7, color: 'hsl(var(--secondary))' },
  { category: 'Marketing & Advertising', amount: 6200, percentage: 10.7, color: 'hsl(var(--success))' },
  { category: 'Utilities', amount: 4800, percentage: 8.3, color: 'hsl(var(--warning))' },
  { category: 'Software Subscriptions', amount: 3200, percentage: 5.5, color: 'hsl(var(--destructive))' },
  { category: 'Travel & Entertainment', amount: 2800, percentage: 4.8, color: 'hsl(var(--muted))' },
  { category: 'Office Supplies', amount: 2100, percentage: 3.6, color: 'hsl(var(--accent))' },
  { category: 'Professional Services', amount: 1900, percentage: 3.3, color: 'hsl(var(--border))' },
  { category: 'Insurance', amount: 500, percentage: 0.9, color: 'hsl(var(--ring))' },
];

const monthlyExpenseTrendData = [
  { month: 'Jan', salaries: 26000, rent: 8000, marketing: 4500, utilities: 4200, other: 6300 },
  { month: 'Feb', salaries: 26500, rent: 8000, marketing: 5200, utilities: 4400, other: 6900 },
  { month: 'Mar', salaries: 27000, rent: 8500, marketing: 4800, utilities: 4300, other: 6400 },
  { month: 'Apr', salaries: 27500, rent: 8500, marketing: 6100, utilities: 4600, other: 7300 },
  { month: 'May', salaries: 28000, rent: 8500, marketing: 5800, utilities: 4700, other: 7000 },
  { month: 'Jun', salaries: 28000, rent: 8500, marketing: 6200, utilities: 4800, other: 7500 },
];

const expenseGrowthData = [
  { category: 'Salaries', thisMonth: 28000, lastMonth: 27500, growth: 1.8 },
  { category: 'Marketing', thisMonth: 6200, lastMonth: 5800, growth: 6.9 },
  { category: 'Utilities', thisMonth: 4800, lastMonth: 4700, growth: 2.1 },
  { category: 'Software', thisMonth: 3200, lastMonth: 3000, growth: 6.7 },
  { category: 'Travel', thisMonth: 2800, lastMonth: 2200, growth: 27.3 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
        <p className="text-foreground font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: ${entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const TopExpensesSection = () => {
  return (
    <div className="space-y-6">
      {/* Top Expenses Overview */}
      <Card className="dashboard-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingDown className="h-5 w-5 text-destructive" />
            <span>Top Expense Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topExpensesData.slice(0, 8).map((expense, index) => (
              <div key={expense.category} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{expense.category}</p>
                    <p className="text-sm text-muted-foreground">{expense.percentage}% of total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">${expense.amount.toLocaleString()}</p>
                  <Badge variant="secondary" className="text-xs">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    Monthly
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expense Distribution Pie Chart */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChartIcon className="h-5 w-5 text-primary" />
              <span>Expense Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topExpensesData.slice(0, 6)}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="amount"
                  label={({ category, percentage }) => `${percentage}%`}
                  labelLine={false}
                  fontSize={11}
                >
                  {topExpensesData.slice(0, 6).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => [`$${value.toLocaleString()}`, 'Amount']}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {topExpensesData.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-xs text-muted-foreground truncate">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expense Growth Comparison */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Expense Growth Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="category" 
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="thisMonth" 
                  fill="hsl(var(--destructive))" 
                  name="This Month"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="lastMonth" 
                  fill="hsl(var(--muted))" 
                  name="Last Month"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Expense Trend */}
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              <span>Monthly Expense Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyExpenseTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="salaries" stackId="a" fill="hsl(var(--primary))" name="Salaries" />
                <Bar dataKey="rent" stackId="a" fill="hsl(var(--secondary))" name="Rent" />
                <Bar dataKey="marketing" stackId="a" fill="hsl(var(--success))" name="Marketing" />
                <Bar dataKey="utilities" stackId="a" fill="hsl(var(--warning))" name="Utilities" />
                <Bar dataKey="other" stackId="a" fill="hsl(var(--muted))" name="Other" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};