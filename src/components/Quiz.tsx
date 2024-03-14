import { QuizType } from "@/types/quiz"

type Props = {
  quiz: QuizType[],
  currentQuestion: number,
  selectedAnswer: string,
  handleAnswer: (answer: string) => void,
}

export const Quiz: React.FC<Props> = ({quiz, currentQuestion, selectedAnswer, handleAnswer}) => {
  
  return (
    <>
      <h2>{currentQuestion + 1}問目</h2>
      <h3>{quiz[currentQuestion].question}</h3>
      <ul>
        {quiz[currentQuestion].options.map((option: string, index: number) => (
          <li key={index}>
            <button
              disabled={selectedAnswer !== ''}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}