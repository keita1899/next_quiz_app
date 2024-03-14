type Props = {
  answer: string
  isCorrect: boolean
  nextQuiz: () => void
}

export const Answer: React.FC<Props> = ({ answer, isCorrect, nextQuiz }) => {
  return (
    <div>
      {isCorrect ? (
        <p>正解です</p>
      ) : (
        <>
          <p>不正解</p>
          <p>正解は{answer}です</p>
        </>
      )}
      <button onClick={nextQuiz}>次へ</button>
    </div>
  )
}
