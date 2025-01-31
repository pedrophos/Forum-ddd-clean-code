import { InMemoryAnswersRepository } from 'test/repositorys/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it('Should be able to create a question', async () => {
    const result = await sut.execute({
      content: 'New Answer',
      instructonId: '1',
      questionId: '1',
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryAnswerRepository.items[0]).toEqual(result.value?.answer)
  })
})
