import { prisma } from "../../lib/prisma";
import { ICreateCommentPayload } from "./comment.interface";

const createCommentIntoDB = async (
  payload: ICreateCommentPayload,
  authorId: string,
) => {
  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: payload.postId,
    },
  });

  const result = await prisma.comment.create({
    data: {
      ...payload,
      authorId,
    },
  });

  return result;
};

const getCommentByAuthorIdFromDB = () => {};

const getCommentByCommentIdFromDB = () => {};

const updateCommentIntoDB = () => {};

const deleteCommentFromDB = () => {};

const moderateCommentIntoDB = () => {};

export const commentService = {
  createCommentIntoDB,
  getCommentByAuthorIdFromDB,
  getCommentByCommentIdFromDB,
  updateCommentIntoDB,
  deleteCommentFromDB,
  moderateCommentIntoDB,
};
