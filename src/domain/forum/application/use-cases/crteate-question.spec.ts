import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/create-question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionRepository = {
  create: async (question: Question) => {},
}

test('create an answer', async () => {
  const questionQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await questionQuestion.execute({
    authorId: '1',
    title: '1',
    content: 'Nova Resposta',
  })

  expect(question.id).toBeTruthy()
})
