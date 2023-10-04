import { getUser, getAllUsers } from "../controllers/userController.js";

const userRoutes = (app) => {
  app.route("/user/:UserID").get(getUser);

  app.route("/users").get(getAllUsers);
};
export default userRoutes;
