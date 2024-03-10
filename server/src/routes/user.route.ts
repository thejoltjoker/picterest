import express from "express";
import * as favoritesController from "../controllers/favorites.controller";
import * as userController from "../controllers/user.controller";
import { validate } from "../middleware/validate";
import { imageItemSchema } from "../schemas/imageItem.schema";
import { userSchema } from "../schemas/user.schema";

const router = express.Router();

/**
 * @openapi
 * /user/{userId}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               userId: "1a79a4d60de6718e8e5b326e338ae533"
 *               favorites: []
 *
 */
router.get("/:userId", userController.get);

/**
 * @openapi
 * /user:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             userId: "1a79a4d60de6718e8e5b326e338ae533"
 *             favorites: []
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               userId: "1a79a4d60de6718e8e5b326e338ae533"
 *               favorites: []
 *
 */
router.post("/", validate(userSchema), userController.create);

/**
 * @openapi
 * /user/{userId}:
 *   put:
 *     summary: Update user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             userId: "1a79a4d60de6718e8e5b326e338ae533"
 *             favorites: []
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               userId: "1a79a4d60de6718e8e5b326e338ae533"
 *               favorites: []
 */
router.put("/:userId", validate(userSchema), userController.update);

/**
 * @openapi
 * /user/{userId}:
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: User deleted successfully
 */
router.delete("/:userId", userController.remove);

/**
 * @openapi
 * /user/{userId}/favorites:
 *   get:
 *     summary: Get favorites by user ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetFavoritesResponse'
 *             example:
 *               favorites:
 *                 - imageId: 8c8e55e63bc1fc33ff41b752e80cb332
 *                   title: Baby Cats Pictures | Download Free Images on Unsplash
 *                   snippet: Baby Cats Pictures | Download Free Images on Unsplash
 *                   link: https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHN8ZW58MHx8MHx8fDA%3D
 *                   contextLink: https://unsplash.com/s/photos/baby-cats
 *                   thumbnailLink: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zo8mY0Lzwe0w7_AXuyVj1-rLvBg890XJRUkL__wDarFq0hCm9mHBK0o&s
 *                   width: 1000
 *                   height: 668
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               message: User not found
 */
router.get("/:userId/favorites", favoritesController.get);

/**
 * @openapi
 * /user/{userId}/favorites:
 *   post:
 *     summary: Add a new favorite for the user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageItem'
 *           example:
 *             imageId: 8c8e55e63bc1fc33ff41b752e80cb332
 *             title: Baby Cats Pictures | Download Free Images on Unsplash
 *             snippet: Baby Cats Pictures | Download Free Images on Unsplash
 *             link: https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHN8ZW58MHx8MHx8fDA%3D
 *             contextLink: https://unsplash.com/s/photos/baby-cats
 *             thumbnailLink: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zo8mY0Lzwe0w7_AXuyVj1-rLvBg890XJRUkL__wDarFq0hCm9mHBK0o&s
 *             width: 1000
 *             height: 668
 *     responses:
 *       '201':
 *         description: Favorite created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageItem'
 *             example:
 *               imageId: 8c8e55e63bc1fc33ff41b752e80cb332
 *               title: Baby Cats Pictures | Download Free Images on Unsplash
 *               snippet: Baby Cats Pictures | Download Free Images on Unsplash
 *               link: https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHN8ZW58MHx8MHx8fDA%3D
 *               contextLink: https://unsplash.com/s/photos/baby-cats
 *               thumbnailLink: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zo8mY0Lzwe0w7_AXuyVj1-rLvBg890XJRUkL__wDarFq0hCm9mHBK0o&s
 *               width: 1000
 *               height: 668
 */
router.post(
  "/:userId/favorites",
  validate(imageItemSchema),
  favoritesController.create
);

/**
 * @openapi
 * /user/{userId}/favorites/{imageId}:
 *   put:
 *     summary: Update favorite by user and image ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - name: imageId
 *         in: path
 *         required: true
 *         description: ID of the image favorite
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageItem'
 *           example:
 *             imageId: 8c8e55e63bc1fc33ff41b752e80cb332
 *             title: Baby Cats Pictures | Download Free Images on Unsplash
 *             snippet: Baby Cats Pictures | Download Free Images on Unsplash
 *             link: https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHN8ZW58MHx8MHx8fDA%3D
 *             contextLink: https://unsplash.com/s/photos/baby-cats
 *             thumbnailLink: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zo8mY0Lzwe0w7_AXuyVj1-rLvBg890XJRUkL__wDarFq0hCm9mHBK0o&s
 *             width: 1000
 *             height: 668
 *     responses:
 *       '200':
 *         description: Favorite updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageItem'
 *             example:
 *               imageId: 8c8e55e63bc1fc33ff41b752e80cb332
 *               title: Baby Cats Pictures | Download Free Images on Unsplash
 *               snippet: Baby Cats Pictures | Download Free Images on Unsplash
 *               link: https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHN8ZW58MHx8MHx8fDA%3D
 *               contextLink: https://unsplash.com/s/photos/baby-cats
 *               thumbnailLink: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Zo8mY0Lzwe0w7_AXuyVj1-rLvBg890XJRUkL__wDarFq0hCm9mHBK0o&s
 *               width: 1000
 *               height: 668
 */
router.put(
  "/:userId/favorites/:imageId",
  validate(imageItemSchema),
  favoritesController.update
);

/**
 * @openapi
 * /user/{userId}/favorites/{imageId}:
 *   delete:
 *     summary: Remove favorite by user and image ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - name: imageId
 *         in: path
 *         required: true
 *         description: ID of the image favorite
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Favorite removed successfully
 */
router.delete("/:userId/favorites/:imageId", favoritesController.remove);

export default router;
