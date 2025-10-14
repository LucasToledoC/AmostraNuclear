import { useState } from 'react';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { quizData } from '@/data/quizData';

export default function QuizSection({ score, setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === quizData[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + quizData[currentQuestion].points);
    }
    
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId: quizData[currentQuestion].id,
        correct: isCorrect,
        selectedAnswer: answerIndex
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
    setScore(0);
  };

  if (quizCompleted) {
    return (
      <section id="quiz-section" className="py-16 bg-slate-800/50 border-t border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-orange-500/20 rounded-full">
                  <Trophy className="w-16 h-16 text-orange-400" />
                </div>
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-white">
                Quiz Concluído!
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg sm:text-xl">
                Sua pontuação final: <span className="text-orange-400 font-bold">{score} pontos</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-300">Perguntas Corretas:</span>
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    {answeredQuestions.filter(q => q.correct).length} / {quizData.length}
                  </Badge>
                </div>
                <Progress value={(score / (quizData.length * 10)) * 100} className="h-3" />
              </div>
              <Button 
                onClick={handleRestart} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg py-4 sm:py-6"
              >
                Reiniciar Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz-section" className="py-16 bg-slate-800/50 border-t border-b border-slate-700">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Teste Seus Conhecimentos</h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <Badge variant="outline" className="text-orange-400 border-orange-400 text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 w-full sm:w-auto text-center">
            Pontuação: {score}
          </Badge>
          <Badge variant="outline" className="text-slate-300 border-slate-600 text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 w-full sm:w-auto text-center">
            Pergunta {currentQuestion + 1} / {quizData.length}
          </Badge>
        </div>
        
        <Progress value={((currentQuestion + 1) / quizData.length) * 100} className="h-2" />
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-white">{quizData[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizData[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === quizData[currentQuestion].correctAnswer;
              const showCorrect = selectedAnswer !== null && isCorrect;
              const showIncorrect = selectedAnswer === index && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-3 sm:p-4 rounded-lg text-left transition-all duration-300 flex items-center gap-2 sm:gap-3 ${
                    showCorrect
                      ? 'bg-green-500/20 border-2 border-green-500 text-white'
                      : showIncorrect
                      ? 'bg-red-500/20 border-2 border-red-500 text-white'
                      : isSelected
                      ? 'bg-orange-500/20 border-2 border-orange-500 text-white'
                      : 'bg-slate-700/50 border-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                  } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    showCorrect
                      ? 'bg-green-500'
                      : showIncorrect
                      ? 'bg-red-500'
                      : 'bg-slate-600'
                  }`}>
                    {showCorrect ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : showIncorrect ? (
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <span className="text-white font-semibold text-sm sm:text-base">{String.fromCharCode(65 + index)}</span>
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}

            {selectedAnswer !== null && (
              <>
                <div className={`p-4 rounded-lg ${
                  selectedAnswer === quizData[currentQuestion].correctAnswer
                    ? 'bg-green-500/20 border border-green-500'
                    : 'bg-red-500/20 border border-red-500'
                }`}>
                  <p className={`font-semibold text-sm sm:text-base ${
                    selectedAnswer === quizData[currentQuestion].correctAnswer
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}>
                    {selectedAnswer === quizData[currentQuestion].correctAnswer
                      ? '✓ Correto! +10 pontos'
                      : '✗ Incorreto! A resposta correta era: ' + quizData[currentQuestion].options[quizData[currentQuestion].correctAnswer]}
                  </p>
                </div>
                <Button 
                  onClick={handleNextQuestion} 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg py-4 sm:py-6"
                >
                  {currentQuestion < quizData.length - 1 ? 'Próxima Pergunta' : 'Ver Resultados'}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

