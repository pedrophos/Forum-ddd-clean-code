import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  findbyId(id: string): Promise<Answer | null>
  save(answer: Answer): Promise<void>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
