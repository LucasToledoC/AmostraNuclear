import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import EducationalContent from './components/sections/EducationalContent';
import QuizSection from './components/sections/QuizSection';
import RewardsSection from './components/sections/RewardsSection';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />
      <Hero />
      <EducationalContent />
      <QuizSection score={score} setScore={setScore} />
      <RewardsSection score={score} />
      <Footer />
    </div>
  );
}

export default App;

