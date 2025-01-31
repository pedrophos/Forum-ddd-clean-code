import { Either, right } from '@/core/either'
import { AnswersCommentsRepository } from '../repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<null, object>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswersCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      throw new Error('Comment not found')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('You are not the author of this comment')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
