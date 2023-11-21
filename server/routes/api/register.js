import { User } from "../../modles/auth/authModal.js";

export default async (req, res) => {
  // console.log(req);
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user
    .save()
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
  res.json({ name, email, password });
};
