import { Router } from "express";
import * as authController from "../Controllers/authController";

/**
 *
 *  @swagger
 *  definitions:
 *      user_password_change:
 *          type: object
 *          required:
 *              - password
 *              - new_password
 *          properties:
 *              password:
 *                  type: string
 *              new_password:
 *                  type: string
 *          example:
 *              password: oldpassword
 *              new_password: newpassword
 */
const router = Router();

/**
 *  @swagger
 *  /api/user/auth/change_password:
 *  post:
 *      tags:
 *          - User
 *      summary: change password
 *      description: Change the password using old password
 *      parameters:
 *          - in: header
 *            name: Authorization
 *            schema:
 *              type: string
 *          - in: body
 *            name: user_password_change
 *            schema:
 *              $ref: '#/definitions/user_password_change'
 *      responses:
 *          '200':
 *              description: Successful
 *          '400':
 *              description: Failed
 */
router.route("/change_password").post(authController.postChangePassword);

/**
 *  @swagger
 *  /api/user/auth/logout:
 *  post:
 *      tags:
 *          - User
 *      summary: logout
 *      description: logout from every device
 *      parameters:
 *          - in: header
 *            name: Authorization
 *            schema:
 *              type: string
 *      responses:
 *          '200':
 *              description: Successful
 *          '400':
 *              description: Failed
 */
router.route("/logout").post(authController.postLogout);

export default router;
