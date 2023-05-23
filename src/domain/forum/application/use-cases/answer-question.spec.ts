import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer use case', () => {
  beforeEach(async () => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it('create an answer', async () => {
    const result = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Nova Resposta',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryAnswerRepository.items[0]).toEqual(result.value?.answer)
  })
})
