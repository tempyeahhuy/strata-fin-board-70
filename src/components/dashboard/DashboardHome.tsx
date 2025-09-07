import { FinancialCards } from "./widgets/FinancialCards";
import { ChartsSection } from "./widgets/ChartsSection";
import { RecentTransactions } from "./widgets/RecentTransactions";
import { QuickActions } from "./widgets/QuickActions";
import { NotificationsPanel } from "./widgets/NotificationsPanel";
import { TasksAndGoals } from "./widgets/TasksAndGoals";
import { IncomeExpenseSection } from "./widgets/IncomeExpenseSection";
import { TopExpensesSection } from "./widgets/TopExpensesSection";

export const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, John!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Financial Overview Cards */}
      <FinancialCards />

      {/* Income & Expense Analysis */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">Income & Expense Analysis</h2>
        <IncomeExpenseSection />
      </div>

      {/* Top Expenses */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">Top Expenses</h2>
        <TopExpensesSection />
      </div>

      {/* Charts Section */}
      <ChartsSection />

      {/* Quick Actions */}
      <QuickActions />

      {/* Tasks, Goals, and Notifications */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TasksAndGoals />
        </div>
        <div className="xl:col-span-1">
          <NotificationsPanel />
        </div>
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  );
};