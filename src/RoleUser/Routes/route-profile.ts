import { Router } from "express";
import * as adminController from "../Controllers/profileController";
const router = Router();

/**
 *  @swagger
 *  /api/user/profile/allusers:
 *  get:
 *      tags:
 *          - User
 *      summary: view profile
 *      description: See all the details of an user
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

router.route("/allusers").get(adminController.getAllUser);

/**
 *  @swagger
 *  /api/user/profile/viewprofile:
 *  get:
 *      tags:
 *          - User
 *      summary: view profile
 *      description: See all the details of an user
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
router.route("/viewprofile").get(adminController.getProfile);

export default router;
