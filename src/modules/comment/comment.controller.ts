import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { commentService } from "./comment.service";
import { sendResponse } from "../../utils/sendResponse";

const createComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user?.id;

    const payload = req.body;

    const result = await commentService.createCommentIntoDB(
      payload,
      id as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Comment created successfully",
      data: result,
    });
  },
);

const getCommentByAuthorId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const getCommentByCommentId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const updateComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const deleteComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

const moderateComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const commentController = {
  createComment,
  getCommentByAuthorId,
  getCommentByCommentId,
  updateComment,
  deleteComment,
  moderateComment,
};
