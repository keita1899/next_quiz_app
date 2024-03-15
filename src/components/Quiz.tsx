import { QuizType } from '@/types/quiz'

type Props = {
  quiz: QuizType
  currentQuestion: number
  selectedAnswer: string
  handleAnswer: (answer: string) => void
}

export const Quiz = ({
  quiz,
  currentQuestion,
  selectedAnswer,
  handleAnswer,
}: Props) => {
  return (
    <>
      <h2>{currentQuestion + 1}問目</h2>
      <h3>{quiz.question}</h3>
      <ul>
        {quiz.options.map((option: string, index: number) => (
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
