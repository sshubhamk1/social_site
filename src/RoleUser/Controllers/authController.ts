import { Request, Response, RequestHandler } from "express";
import bcrpyt from "bcryptjs";
import { Users } from "../../Engine/Models/users";
import { User_auth } from "../../Engine/Models/user_auth";

export const postChangePassword: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { password, new_password } = req.body;

    let user = await Users.findOne({ where: { id: req.user.id } });

    if (!user) throw "No user found with this credential!";

    const isMatch: Boolean = await bcrpyt.compare(password, user.password);

    if (!isMatch) throw "Wrong password please try with correct old password!";

    user.password = await bcrpyt.hash(new_password, 10);
    await user.save();

    return res.status(200).json({ error: false, msg: "Password changed!" });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};

export const postLogout: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    await User_auth.destroy({ where: { user_id: req.user.id } });
    return res.status(200).json({ error: false, msg: "successfully logout!" });
  } catch (e) {
    return res.status(400).json({ error: false, msg: String(e) });
  }
};
