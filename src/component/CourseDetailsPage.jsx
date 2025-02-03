import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './pages/Footer';
import Navbar from './Navbar';
import TopSlider from './TopSlider'

const courses = [
  {
    id: 1,
    title: 'A Complete Beginner Course of Stock Market',
    description: 'Learn the fundamentals of the stock market with Danish Sir.',
    price: { original: '₹5,999', discounted: '₹3,499' },
    whatYouWillGet: [
      'Basics of Stock Market: Understanding what stocks are, how the stock market works, and key financial terms.',
      'Types of Investments: Introduction to stocks, mutual funds, ETFs, and other investment options.',
      'Risk Management: Learning strategies to minimize losses and manage risk effectively.',
      'Trading Mechanics: How to open a trading account, place orders, and interpret stock charts.',
      'Market Analysis: Basics of fundamental and technical analysis to make informed decisions.',
      'Basics of Candles',
    ],
    duration: '1 week',
    image: '/img/auth2.jpg',
  },
  {
    id: 2,
    title: 'Intermediate Course of Stock Market',
    description: 'Take your stock market skills to the next level with Danish Sir.',
    price: { original: '₹7,999', discounted: '₹5,999' },
    whatYouWillGet: [
      'Advanced Fundamental Analysis: Evaluating financial statements, ratios, and industry trends to assess stock value.',
      'Technical Analysis: Using advanced candlesticks, chart patterns, indicators, and oscillators for trading decisions.',
      'Derivative Markets: Introduction to options, futures, and hedging strategies.',
      'Trading Psychology: Managing emotions, developing discipline, and sticking to a trading plan.',
    ],
    duration: '1 week',
    image: '/img/auth2.jpg',
  },
  {
    id: 3,
    title: 'Advanced Course of Stock Market',
    description: 'Master advanced stock market strategies with Danish Sir.',
    price: { original: '₹13,999', discounted: '₹9,999' },
    whatYouWillGet: [
      'Options Greeks: Mastering delta, gamma, theta, vega, and rho to assess and manage risk dynamically.',
      'Volatility Trading: Understanding implied vs. historical volatility and strategies like volatility arbitrage.',
      'Advanced Strategies: Multi-leg strategies such as iron condors, butterflies, calendar spreads, and ratio spreads.',
      'Options Pricing Models: In-depth study of the Black-Scholes model, binomial models, and their practical applications.',
      'Risk Management: Managing margin requirements, leveraging stop-losses, and handling sudden market changes.',
      'Earnings and Event-Based Trading: Structuring trades around earnings announcements and other significant events.',
      'Portfolio Hedging: Using options to hedge equities, ETFs, or entire portfolios against market downturns.',
      'Exotic Options: Introduction to barrier options, binary options, and other less common derivatives.',
      'Advanced Adjustments: Rolling, adjusting, and repairing options positions to mitigate risk or enhance profitability.',
    ],
    duration: '10 days',
    image: '/img/auth2.jpg',
  },
  {
    id: 4,
    title: 'A Complete Course Bundle (Beginner + Intermediate + Advance)',
    description: 'Learn everything about the stock market in one comprehensive course.',
    price: { original: '₹22,000', discounted: '₹17,999' },
    whatYouWillGet: [
      'Complete learning across all three levels: Beginner, Intermediate, and Advanced stock market strategies.',
      'Expert tips and hands-on experience to navigate the stock market.',
    ],
    duration: '1 month',
    image: '/img/auth2.jpg',
  },
   {
    id: 4,
    title: 'A Complete Course Bundle (Beginner + Intermediate + Advance)',
    description: 'Learn everything about the stock market in one comprehensive course.',
    price: { original: '₹22,000', discounted: '₹17,999' },
    whatYouWillGet: [
      'Complete learning across all three levels: Beginner, Intermediate, and Advanced stock market strategies.',
      'Expert tips and hands-on experience to navigate the stock market.',
    ],
    duration: '1 month',
    image: '/img/auth2.jpg',
  },
];

const CourseDetailsPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const course = courses.find((course) => course.id === parseInt(id)); // Find the course by ID

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <>
    <TopSlider/>
    <Navbar/>
    <div className="min-h-screen py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row    overflow-hidden">
          {/* Left section with course details */}
          <div className="p-8 md:w-1/2">
            <h1 className="text-4xl font-extrabold text-yellow-500">{course.title}</h1>
            <p className="mt-4 text-xl text-gray-200 font-serif">{course.description}</p>

            <div className="mt-6">
              <p className="text-2xl font-semibold text-green-500">
                Price: <span className="line-through text-red-500">{course.price.original}</span> {course.price.discounted}
              </p>
              <p className="text-lg text-gray-300">Duration: {course.duration}</p>
            </div>

            {/* What You Will Get section */}
            <h3 className="mt-8 text-2xl font-semibold text-gray-300">What You Will Get:</h3>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              {course.whatYouWillGet.map((item, index) => (
                <li key={index} className="text-base">{item}</li>
              ))}
            </ul>

            {/* Enroll Button */}
            <div className="mt-8">
              <button className="px-6 py-3 bg-yellow-500  text-primary text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Right section with image */}
          <div className="md:w-1/2 lg:p-12">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CourseDetailsPage;
