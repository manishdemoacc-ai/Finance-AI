import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowLeft, TrendingUp, TrendingDown, Brain, Calendar } from 'lucide-react';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';


export function Analytics() {
  const monthlyComparison = [
    { month: 'Jan', spending: 2100, income: 3000 },
    { month: 'Feb', spending: 2350, income: 3000 },
    { month: 'Mar', spending: 2200, income: 3000 },
    { month: 'Apr', spending: 2456, income: 3000 },
  ];

  const categoryTrend = [
    { month: 'Jan', food: 800, transport: 400, entertainment: 350, shopping: 450, bills: 100 },
    { month: 'Feb', food: 850, transport: 420, entertainment: 380, shopping: 500, bills: 200 },
    { month: 'Mar', food: 780, transport: 450, entertainment: 320, shopping: 480, bills: 170 },
    { month: 'Apr', food: 856, transport: 420, entertainment: 380, shopping: 520, bills: 280 },
  ];

  const predictionData = [
    { month: 'Jan', actual: 2100, predicted: 2050 },
    { month: 'Feb', actual: 2350, predicted: 2300 },
    { month: 'Mar', actual: 2200, predicted: 2250 },
    { month: 'Apr', actual: 2456, predicted: 2400 },
    { month: 'May', predicted: 2580 },
    { month: 'Jun', predicted: 2650 },
  ];

  const categoryData = [
    { name: 'Food', value: 856, color: '#6366f1' },
    { name: 'Transport', value: 420, color: '#8b5cf6' },
    { name: 'Entertainment', value: 380, color: '#ec4899' },
    { name: 'Shopping', value: 520, color: '#14b8a6' },
    { name: 'Bills', value: 280, color: '#f59e0b' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/dashboard."
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Financial Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Deep insights into your spending patterns and predictions</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Daily</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹81.89</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Top Category</span>
                <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded">Food</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹856</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Savings Rate</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">18.1%</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Prediction</span>
                <Brain className="w-4 h-4 text-violet-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹2,580</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="prediction">AI Prediction</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Income vs Spending</CardTitle>
                <CardDescription>Monthly comparison of your income and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={monthlyComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#14b8a6" name="Income" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="spending" fill="#6366f1" name="Spending" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spending Trend</CardTitle>
                <CardDescription>Your spending patterns over the last 4 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={monthlyComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="spending" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Month Breakdown</CardTitle>
                  <CardDescription>Spending distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>Detailed spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryData.map((category, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">${category.value}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: category.color,
                              width: `₹{(category.value / categoryData.reduce((sum, cat) => sum + cat.value, 0)) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Category Trends</CardTitle>
                <CardDescription>How your spending categories have changed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={categoryTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="food" stroke="#6366f1" strokeWidth={2} />
                    <Line type="monotone" dataKey="transport" stroke="#8b5cf6" strokeWidth={2} />
                    <Line type="monotone" dataKey="entertainment" stroke="#ec4899" strokeWidth={2} />
                    <Line type="monotone" dataKey="shopping" stroke="#14b8a6" strokeWidth={2} />
                    <Line type="monotone" dataKey="bills" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prediction" className="space-y-6">
            <Card className="bg-gradient-to-br from-indigo-500 to-violet-600 border-0 text-white">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6" />
                  <CardTitle className="text-white">AI-Powered Predictions</CardTitle>
                </div>
                <CardDescription className="text-indigo-100">
                  Using linear regression to forecast your future expenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 mb-4">
                  Our machine learning model analyzes your historical spending patterns to predict future expenses with high accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <p className="text-sm text-indigo-100">Next Month</p>
                    <p className="text-2xl font-bold">₹2,580</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <p className="text-sm text-indigo-100">Accuracy</p>
                    <p className="text-2xl font-bold">94.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prediction vs Actual Spending</CardTitle>
                <CardDescription>Compare AI predictions with your actual spending</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={predictionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#6366f1" strokeWidth={3} name="Actual Spending" />
                    <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" name="AI Prediction" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prediction Insights</CardTitle>
                <CardDescription>What the AI is telling you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Increasing Trend</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Your spending is projected to increase by 5% next month</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
                    <Calendar className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Seasonal Pattern</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Historical data shows increased spending in upcoming months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Brain className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Recommendation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Consider setting aside $150 extra to meet your savings goal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <MobileBottomNav />
    </div>
  );
}
