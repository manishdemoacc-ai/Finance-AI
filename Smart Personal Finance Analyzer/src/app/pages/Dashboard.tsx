import { Link } from 'react-router';
import { PlusCircle, TrendingUp, TrendingDown, DollarSign, Target, Brain, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';

export function Dashboard() {
  // Mock data
  const monthlySpending = 2456.78;
  const budget = 3000;
  const savingsGoal = 5000;
  const currentSavings = 3250;
  const predictedNextMonth = 2580.50;

  const categoryData = [
    { name: 'Food', value: 856, color: '#6366f1' },
    { name: 'Transport', value: 420, color: '#8b5cf6' },
    { name: 'Entertainment', value: 380, color: '#ec4899' },
    { name: 'Shopping', value: 520, color: '#14b8a6' },
    { name: 'Bills', value: 280, color: '#f59e0b' },
  ];

  const weeklyData = [
    { week: 'Week 1', spending: 450 },
    { week: 'Week 2', spending: 680 },
    { week: 'Week 3', spending: 520 },
    { week: 'Week 4', spending: 806 },
  ];

  const trendData = [
    { month: 'Jan', spending: 2100, predicted: 2050 },
    { month: 'Feb', spending: 2350, predicted: 2300 },
    { month: 'Mar', spending: 2200, predicted: 2250 },
    { month: 'Apr', spending: 2456, predicted: 2400 },
    { month: 'May', spending: 0, predicted: 2580 },
  ];

  const budgetPercentage = (monthlySpending / budget) * 100;
  const savingsPercentage = (currentSavings / savingsGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Your financial overview at a glance</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link to="/add-expense" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <PlusCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add</p>
                  <p className="font-semibold text-gray-900 dark:text-white">New Expense</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analytics" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">View</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Analytics</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                <p className="font-semibold text-gray-900 dark:text-white">₹{budget.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          <Link to="/profile" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">View</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Profile</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardDescription>This Month's Spending</CardDescription>
              <CardTitle className="text-3xl">₹{monthlySpending.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Budget: ₹{budget.toLocaleString()}</span>
                  <span className={budgetPercentage > 80 ? 'text-red-500' : 'text-green-500'}>
                    {budgetPercentage.toFixed(0)}%
                  </span>
                </div>
                <Progress value={budgetPercentage} className="h-2" />
                {budgetPercentage > 80 ? (
                  <div className="flex items-center text-sm text-red-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>Approaching budget limit</span>
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    <span>Within budget</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white border-0">
            <CardHeader>
              <CardDescription className="text-indigo-100">AI Prediction</CardDescription>
              <CardTitle className="text-3xl text-white flex items-center">
                <Brain className="w-8 h-8 mr-2" />
                ₹{predictedNextMonth.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-100 mb-2">Predicted spending for next month</p>
              <Link to="/analytics">
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Savings Goal Progress</CardDescription>
              <CardTitle className="text-3xl">₹{currentSavings.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Goal: ₹{savingsGoal.toLocaleString()}</span>
                  <span className="text-teal-500">{savingsPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={savingsPercentage} className="h-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ₹{(savingsGoal - currentSavings).toLocaleString()} to go!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
              <CardDescription>Your expense distribution this month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `₹{name} ₹{(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-₹{index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{category.name}: ₹{category.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Spending</CardTitle>
              <CardDescription>Your spending pattern this month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="spending" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Spending Trend & AI Prediction</CardTitle>
              <CardDescription>Historical spending vs AI predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="spending" stroke="#6366f1" strokeWidth={2} name="Actual Spending" />
                  <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="AI Prediction" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      <MobileBottomNav />
    </div>
  );
}
