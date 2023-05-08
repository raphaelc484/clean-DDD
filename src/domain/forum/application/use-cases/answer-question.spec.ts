import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-question'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova Resposta',
  })

  expect(answer.content).toEqual('Nova Resposta')
})
