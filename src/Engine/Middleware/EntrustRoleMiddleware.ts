import { Request, Response, RequestHandler, NextFunction } from "express";
import { getToken } from "../Helpers/authHelper";
import { User_auth } from "../Models/user_auth";

export const isRoleUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authData: any = await getToken(req, res, next);
    const user_data = await User_auth.findOne({
      where: { auth_key: authData },
    });

    if (!user_data) throw "user not authenticated please login again";

    req.user = {
      id: user_data.user_id,
    };
    next();
  } catch (e) {
    return res
      .status(400)
      .json({ error: true, msg: "Please login again to continue" });
  }
};
