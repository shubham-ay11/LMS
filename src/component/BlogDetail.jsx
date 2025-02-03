import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './pages/Footer';
import TopSlider from './TopSlider'

function BlogDetail() {
  const { id } = useParams(); // Get the dynamic route parameter (e.g., id=1)

  // Define the content for each blog post
  const blogContent = {

    1: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">1. Understand the Basics of Price Action</h2>
        <p className="text-lg text-gray-300 mb-6">
          Before diving into advanced techniques, familiarize yourself with the fundamental concepts:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Candlestick Patterns:</strong> Learn common candlestick formations like pin bars, engulfing candles, and dojis.</li>
          <li><strong>Market Structure:</strong> Understand trends (uptrend, downtrend, sideways), higher highs/lows, and support/resistance levels.</li>
          <li><strong>Order Flow:</strong> Recognize how buyers and sellers interact to create price movement.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">2. Learn Key Price Action Concepts</h2>
        <p className="text-lg text-gray-300 mb-6">
          Focus on these critical elements:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Support and Resistance:</strong> Identify areas where price has historically reversed or stalled. These are key decision points for traders.</li>
          <li><strong>Trendlines:</strong> Use trendlines to determine the direction of the market and potential breakout points.</li>
          <li><strong>Breakouts and False Breakouts:</strong> Learn to distinguish genuine breakouts from fake ones.</li>
          <li><strong>Supply and Demand Zones:</strong> Recognize areas where buyers or sellers are strongly positioned.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">3. Master Candlestick Patterns</h2>
        <p className="text-lg text-gray-300 mb-6">
          Candlestick patterns reveal market psychology. Study common patterns, such as:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Reversal Patterns:</strong> Hammer, shooting star, evening/morning star.</li>
          <li><strong>Continuation Patterns:</strong> Flags, pennants, and triangles.</li>
          <li><strong>Indecision Patterns:</strong> Dojis and spinning tops indicate potential reversals or continuation.</li>
        </ul>
        <p className="text-lg text-gray-300 mb-6">
          Focus on the context in which these patterns appear rather than trading them in isolation.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">4. Observe Market Context</h2>
        <p className="text-lg text-gray-300 mb-6">
          Price action must be analyzed in the context of the market environment:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Trending Markets:</strong> Look for pullbacks to key support/resistance levels or trendlines for entry opportunities.</li>
          <li><strong>Ranging Markets:</strong> Focus on buying near support and selling near resistance.</li>
          <li><strong>Volatile Markets:</strong> Be cautious and consider waiting for clear setups.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">5. Practice Chart Reading</h2>
        <p className="text-lg text-gray-300 mb-6">
          Spend time observing and analyzing price charts. Focus on:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Identifying patterns and key levels.</li>
          <li>Noting how price reacts to support, resistance, and trendlines.</li>
          <li>Observing the behavior of price during economic news events or high-volatility periods.</li>
        </ul>
        {/*  */}
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">6. Develop a Price Action Trading Strategy</h2>
        <p className="text-lg text-gray-300 mb-6">
        Create a trading plan based on price action. It should include:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Setup Criteria: Define what a valid trading setup looks like (e.g., a pin bar at a strong resistance level).</li>
          <li>Entry Rules: Decide how and when you’ll enter trades (e.g., after confirmation of a breakout or retest).</li>
          <li>Exit Rules: Set profit targets and stop-loss levels based on market structure or volatility.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">7. Combine Price Action with Risk Management</h2>
        <p className="text-lg text-gray-300 mb-6">
        Even the best price action setups can fail. Use proper risk management techniques:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Risk only 1-2% of your capital per trade.</li>
          <li>Use stop-loss orders to limit potential losses.</li>
          <li>Avoid overleveraging or overtrading.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">8. Backtest and Forward Test</h2>
        <p className="text-lg text-gray-300 mb-6">
        Practice identifying and trading price action setups using historical data (backtesting). Once confident, move to live markets with a demo account (forward testing) to refine your skills.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">9. Focus on Emotional Discipline</h2>
        <p className="text-lg text-gray-300 mb-6">
        Price action trading can be subjective, so maintaining discipline is critical:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Stick to your trading plan.</li>
          <li>Avoid chasing trades or second-guessing your analysis.</li>
          <li>Learn from losses and adjust strategies as needed.</li>
        </ul>


        <h2 className="text-2xl font-bold mb-4 text-yellow-500">10. Keep Learning and Improving</h2>
        <p className="text-lg text-gray-300 mb-6">
        Price action mastery is a continuous process. Study advanced concepts such as:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Multi-timeframe analysis: Use higher timeframes to understand the bigger picture and lower timeframes for precision entries.</li>
          <li>Institutional price behavior: Learn how big players manipulate price to capture liquidity.</li>

        </ul>
      
        {/*  */}
      </>
    ),
    2: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">!.Master the Basics of Trading</h2>
        <p className="text-lg text-gray-300 mb-6">
          Start by understanding the fundamentals of trading and financial markets. Learn about different asset classes (stocks, forex, cryptocurrencies, commodities), market mechanics, and the factors that influence price movements. Invest time in studying technical and fundamental analysis, as these are critical tools for making informed decisions.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">2. Develop a Trading Plan</h2>
        <p className="text-lg text-gray-300 mb-6">
          A trading plan is your roadmap for success. It should include:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Trading Goals:</strong> Define realistic short-term and long-term objectives.</li>
          <li><strong>Risk Management Rules:</strong> Set maximum risk per trade (1-2% of capital is common) and overall portfolio risk limits.</li>
          <li><strong>Entry and Exit Criteria:</strong> Specify the conditions for entering and exiting trades.</li>
          <li><strong>Trading Strategy:</strong> Choose a strategy that suits your personality and lifestyle, such as day trading, swing trading, or trend following.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">3. Focus on Risk Management</h2>
        <p className="text-lg text-gray-300 mb-6">
          Risk management is crucial for long-term profitability. Even the best strategies can fail without proper risk controls. Key principles include:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Position Sizing:</strong> Never risk more than a small percentage of your capital on a single trade.</li>
          <li><strong>Stop-Loss Orders:</strong> Use stop-loss orders to limit potential losses.</li>
          <li><strong>Diversification:</strong> Avoid putting all your capital into a single asset or trade.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">4. Choose the Right Tools and Platforms</h2>
        <p className="text-lg text-gray-300 mb-6">
        Invest in reliable trading tools and platforms that provide real-time data, advanced charting capabilities, and risk management features. Popular platforms like MetaTrader, Thinkorswim, or TradingView offer robust tools for professional traders.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">5. Start Small and Scale Up Gradually</h2>
        <p className="text-lg text-gray-300 mb-6">
        Begin with a small account to minimize losses while you gain experience. Once you consistently demonstrate profitability, gradually increase your trading capital.
        </p>


        
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">6. Master Your Emotions</h2>
        <p className="text-lg text-gray-300 mb-6">
        Emotional discipline is critical to professional trading. Fear and greed are the biggest enemies of traders. To manage emotions effectively:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Stick to your trading plan.</li>
          <li>Avoid overtrading or revenge trading after losses.</li>
          <li>Take breaks to maintain a clear and focused mind.</li>
        </ul>

         
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">7. Backtest and Refine Your Strategies</h2>
        <p className="text-lg text-gray-300 mb-6">
        Use historical data to test your trading strategies. Backtesting helps you understand how your strategy performs under various market conditions. Refine your approach based on these insights and continually adapt to changing market dynamics.
        </p>
     

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">8. Maintain a Trading Journal</h2>
        <p className="text-lg text-gray-300 mb-6">
        Keep a detailed record of every trade, including:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Entry and exit points</li>
          <li>Rationale for the trade</li>
          <li>Results and lessons learned</li>
          <li>Reviewing your journal regularly helps identify patterns, strengths, and weaknesses in your trading.</li>
        </ul>


        <h2 className="text-2xl font-bold mb-4 text-yellow-500">9. Continue Learning</h2>
        <p className="text-lg text-gray-300 mb-6">
        Markets are constantly evolving, and staying updated is essential. Read books, attend webinars, and follow market news. Consider learning from professional traders or joining trading communities to gain insights.
        </p>
     

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">10. Think Long-Term</h2>
        <p className="text-lg text-gray-300 mb-6">
        Professional trading is not about getting rich quickly but building consistent profits over time. Focus on developing your skills, maintaining discipline, and improving your performance incrementally.
        </p>
        
        {/*  */}
      </>
    ),
    3: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">Ading can be an exciting way to grow your wealth, but it requires careful planning, knowledge, and discipline. Here’s a step-by-step guide for starting your trading journey from scratch.</h2>
       

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">1. Understand What Trading Is</h2>
        <p className="text-lg text-gray-300 mb-6">
          Trading involves buying and selling financial assets like stocks, forex, commodities, or cryptocurrencies with the aim of making a profit. Each asset class has unique characteristics and risks. Decide which type of trading aligns with your goals and risk tolerance, whether it’s day trading, swing trading, or long-term investing.
        </p>

        <h2 className="text-2xl font-bold text-yellow-500 mb-4">2. Educate Yourself</h2>
        <p className="text-lg text-gray-300 mb-6">
          Begin by learning the basics of trading. Familiarize yourself with key concepts such as:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li><strong>Market Types:</strong> Understand stock markets, forex markets, and cryptocurrency exchanges.</li>
          <li><strong>Technical Analysis:</strong> Study price charts, indicators, and patterns.</li>
          <li><strong>Fundamental Analysis:</strong> Learn how economic data, company earnings, and geopolitical events impact asset prices.</li>
          <li><strong>Risk Management:</strong> Learn about position sizing, stop-loss orders, and the importance of managing risk.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">3. Set Clear Goals</h2>
        <p className="text-lg text-gray-300 mb-6">
          Define why you want to trade. Is it to supplement your income, build long-term wealth, or achieve financial independence? Your goals will shape your trading strategy and the amount of time and capital you’re willing to invest.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">4. Create a Budget</h2>
        <p className="text-lg text-gray-300 mb-6">
          Start with an amount you can afford to lose without affecting your financial stability. Many brokers allow you to trade with as little as $100, but it’s best to begin with an amount that lets you learn and grow without undue stress.
        </p>

{/*  */}
<h2 className="text-2xl font-bold mb-4 text-yellow-500">5. Choose a Broker</h2>
        <p className="text-lg text-gray-300 mb-6">
        Select a reputable broker that suits your trading needs. Consider factors like:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Low fees and commissions</li>
          <li>User-friendly platform</li>
          <li>Access to educational resources</li>
          <li>Regulatory compliance Some popular brokers include TD Ameritrade, E*TRADE, and Robinhood for stocks, or Binance and Coinbase for cryptocurrencies.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">6. Practice on a Demo Account</h2>
        <p className="text-lg text-gray-300 mb-6">
        Before risking real money, use a demo account to practice. These accounts mimic real market conditions, allowing you to test strategies, understand market dynamics, and build confidence without financial risk.
        </p>


        <h2 className="text-2xl font-bold mb-4 text-yellow-500">7. Develop a Trading Plan</h2>
        <p className="text-lg text-gray-300 mb-6">
        Your trading plan should include:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-6">
          <li>Entry and exit rules: Define when to buy and sell.</li>
          <li>Risk tolerance: Determine how much you’re willing to risk per trade (typically 1-2% of your capital).</li>
          <li>Goals: Set realistic profit targets.</li>
          <li>Stick to your plan to avoid emotional decision-making.</li>
          
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">8. Start Small</h2>
        <p className="text-lg text-gray-300 mb-6">
        Begin trading with a small amount of real money. Focus on learning and improving rather than making large profits initially. Review each trade to understand what worked and what didn’t.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">9. Keep Emotions in Check</h2>
        <p className="text-lg text-gray-300 mb-6">
        Fear and greed can lead to poor decisions. Develop the discipline to stick to your strategy, even in volatile markets.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-yellow-500">10. Continue Learning and Adapting</h2>
        <p className="text-lg text-gray-300 mb-6">
        Markets are dynamic, so continue to learn and adapt. Stay updated with market news and refine your strategies as needed.
        </p>
        {/*  */}
      </>
    ),
  };

  return (
    <>
    <TopSlider/>
    <Navbar/>
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Blog Detail {id}</h1>
      <div className="text-lg text-gray-300 mb-6">
        {/* Render the blog content based on the `id` */}
        {blogContent[id] || <p>Blog content not found.</p>}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default BlogDetail;
