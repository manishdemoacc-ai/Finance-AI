import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, PlusCircle, TrendingUp, Brain, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function HowItWorksStep() {
  const { step } = useParams();
  const stepNumber = parseInt(step || '1');

  const steps = [
    {
      title: 'Add Expenses',
      icon: PlusCircle,
      gradient: 'from-indigo-500 to-violet-600',
      description: 'Start by adding your daily expenses quickly and easily. Our smart interface makes expense tracking a breeze.',
      details: [
        'Quick entry form with minimal fields',
        'Smart category suggestions',
        'Date and amount tracking',
        'Optional notes and receipts',
      ],
      image: '📝',
    },
    {
      title: 'Analyze Patterns',
      icon: TrendingUp,
      gradient: 'from-violet-500 to-purple-600',
      description: 'Discover your spending habits through beautiful visualizations and detailed analytics.',
      details: [
        'Interactive charts and graphs',
        'Category-wise breakdown',
        'Weekly and monthly trends',
        'Spending comparisons',
      ],
      image: '📊',
    },
    {
      title: 'Predict Future Spending',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600',
      description: 'Our AI analyzes your patterns and predicts future expenses using machine learning.',
      details: [
        'Linear regression analysis',
        'Accurate forecasting',
        'Confidence intervals',
        'Seasonal adjustments',
      ],
      image: '🤖',
    },
    {
      title: 'Optimize Savings',
      icon: Target,
      gradient: 'from-pink-500 to-rose-600',
      description: 'Get personalized recommendations to optimize your budget and reach your savings goals faster.',
      details: [
        'Smart budget recommendations',
        'Goal tracking',
        'Savings strategies',
        'Progress monitoring',
      ],
      image: '🎯',
    },
  ];

  const currentStep = steps[stepNumber - 1];
  const Icon = currentStep.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Step {stepNumber} of 4</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{Math.round((stepNumber / 4) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ₹{currentStep.gradient} rounded-full transition-all`}
              style={{ width: `₹{(stepNumber / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <Card className="p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ₹{currentStep.gradient} flex items-center justify-center text-5xl`}>
              {currentStep.image}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentStep.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {currentStep.description}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {currentStep.details.map((detail, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ₹{currentStep.gradient} text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5`}>
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{detail}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {stepNumber > 1 ? (
            <Link to={`/how-it-works/step-₹{stepNumber - 1}`}>
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Step
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {stepNumber < 4 ? (
            <Link to={`/how-it-works/step-₹{stepNumber + 1}`}>
              <Button size="lg" className={`bg-gradient-to-r ₹{currentStep.gradient} text-white`}>
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button size="lg" className={`bg-gradient-to-r ₹{currentStep.gradient} text-white`}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
