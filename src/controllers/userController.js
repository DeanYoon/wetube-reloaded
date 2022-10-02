import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation doesn't match.",
    });
  }

  const exists = await User.exists({
    $or: [{ username }, { name }, { email }],
  });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username/name/email is already taken",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
  return res.redirect("/login");
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  // check exist username
  const user = await User.findOne({
    username,
  });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "This username doesn't exists",
    });
  }
  //check password
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password!",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove user");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See");
