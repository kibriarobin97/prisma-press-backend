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

const getCommentByAuthorIdFromDB = async (authorId: string) => {
  const result = await prisma.comment.findMany({
    where: {
      authorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getCommentByCommentIdFromDB = async (commentId: string) => {
  const result = await prisma.comment.findUniqueOrThrow({
    where: {
      id: commentId,
    },
    include: {
      post: {
        select: {
          title: true,
          status: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return result;
};

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
