import express from "express";
const router = express.Router();
import { adminGuard, authGuard } from "../middlewares/authMiddleware";
import {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  getSingleCategory,
  updatePostCategory,
} from "../controllers/postCategoriesControllers";

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

export default router;
