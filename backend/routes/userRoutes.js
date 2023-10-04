import {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRoutes = (app) => {
  app.route("/user/:UserID").get(getUser).put(updateUser).delete(deleteUser);

  app.route("/users").get(getAllUsers);
};
export default userRoutes;
