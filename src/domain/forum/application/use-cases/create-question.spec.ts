import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-respository'
import { CreateQuestionUseCase } from './create-question'
// import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question use case', () => {
  beforeEach(async () => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: '1',
      content: 'Nova Resposta',
      attachmentsIds: ['1', '2'],
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question)
    expect(
      inMemoryQuestionsRepository.items[0].attachments.currentItems,
    ).toHaveLength(2)
    // expect(
    //   inMemoryQuestionsRepository.items[0].attachments.currentItems,
    // ).toEqual([
    //   expect.objectContaining({ attachmentsId: new UniqueEntityId('1') }),
    //   expect.objectContaining({ attachmentsId: new UniqueEntityId('2') }),
    // ])
  })
})
