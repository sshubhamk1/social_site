import { Request, Response, RequestHandler } from "express";
import { Users, UsersAttributes } from "../../Engine/Models/users";
import { v4 as uuidv4 } from "uuid";
import bcrpyt from "bcryptjs";
import { generateToken } from "../../Engine/Helpers/authHelper";
import { User_auth } from "../../Engine/Models/user_auth";

export const postSignIn: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });

    if (!user) throw "Invalid credentials";

    const isMatch: Boolean = await bcrpyt.compare(password, user.password);

    if (!isMatch) throw "Invalid credentials";

    const auth_token: any = await generateToken({
      id: user.username,
      first_name: user.first_name,
    });
    const user_auth_data = {
      user_id: user.id,
      auth_key: auth_token,
    };
    await User_auth.create(user_auth_data);
    return res.status(200).json({ error: false, auth_token });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};

// signup controller
export const postSignup: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const userData: UsersAttributes = {
      first_name,
      last_name,
      email,
      password: await bcrpyt.hash(password, 10),
      username: uuidv4(),
    };
    const user = await Users.create(userData);

    const user_data: UsersAttributes = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: password,
      username: user.username,
    };

    return res.status(200).json({ error: false, user_data });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};
