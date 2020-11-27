import { Request, Response, RequestHandler } from "express";
import { Users } from "../../Engine/Models/users";

// get all user page
export const getAllUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await Users.findAll({
      attributes: ["first_name", "username"],
    });

    return res.status(200).json({
      error: false,
      users,
    });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};

export const getProfile: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await Users.findOne({
      where: { id: req.user.id },
      attributes: {
        exclude: [
          "id",
          "createdAt",
          "updatedAt",
          "password",
          "deletedAt",
          "reset_token",
        ],
      },
    });
    return res.status(200).json({ error: false, user });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};
