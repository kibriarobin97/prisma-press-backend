import { prisma } from "../../lib/prisma";
import { ICreatePostPayload } from "./post.interface";

const createPostIntoDB = async (
  payload: ICreatePostPayload,
  userId: string,
) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });

  return result;
};

const getAllPostFromDB = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      comments: true,
    },
  });

  return posts;
};

const getPostByIdFromDB = () => {};

const updatePostIntoDB = () => {};

const deletePostFromDB = () => {};

const getPostStatsFromDB = () => {};

const getMyPostFromDB = () => {};

export const postService = {
  createPostIntoDB,
  getAllPostFromDB,
  getPostByIdFromDB,
  updatePostIntoDB,
  deletePostFromDB,
  getPostStatsFromDB,
  getMyPostFromDB,
};
