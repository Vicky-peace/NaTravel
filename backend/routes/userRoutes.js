import {
  getUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController.js";

const userRoutes = (app) => {
  app.route("/user/:UserID").get(getUser).post(updateUser);

  app.route("/users").get(getAllUsers);
};
export default userRoutes;
