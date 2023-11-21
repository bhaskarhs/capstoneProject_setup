import { User } from "../../modles/auth/authModal.js";

export default async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.send("email or password missing");
  }
  User.findOne({ email })
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => res.json({ err }));
};
