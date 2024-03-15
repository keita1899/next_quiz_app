import { Answer } from '@/components/Answer'
import { Quiz } from '@/components/Quiz'
import { quizData } from '@/data/quizData'
import { QuizType } from '@/types/quiz'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

const QuizPage = () => {
  const [quizes, setQuizes] = useState<QuizType[]>(quizData)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  // クイズの状態
  const [quizStatus, setQuizStatus] = useState<
    'start' | 'answering' | 'answered' | 'finished'
  >('start')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)

    if (answer === quizes[currentQuestion].correctAnswer) {
      setIsCorrect(true)
      setScore(score + 10)
    } else {
      setIsCorrect(false)
    }

    setQuizStatus('answered')
  }

  const nextQuiz = () => {
    if (currentQuestion < quizes.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
      setQuizStatus('answering')
    } else {
      setQuizStatus('finished')
    }
  }

  return (
    <>
      <Head>
        <title>Next Quiz App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {quizStatus === 'start' && (
        <>
          <button onClick={() => setQuizStatus('answering')}>START</button>
          <Link href='/'>ホームに戻る</Link>
        </>
      )}
      {quizStatus === 'answering' && (
        <Quiz
          quiz={quizes[currentQuestion]}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          handleAnswer={handleAnswer}
        />
      )}
      {quizStatus === 'answered' && (
        <Answer
          answer={quizes[currentQuestion].correctAnswer}
          isCorrect={isCorrect}
          nextQuiz={nextQuiz}
        />
      )}
      {quizStatus === 'finished' && (
        <>
          <p>クイズ終了</p>
          <p>スコアは{score}点です</p>
        </>
      )}
    </>
  )
}

export default QuizPage
