import { getUser } from "../controllers/userController.js";

const userRoutes = (app) => {
  app.route("/user/:UserID").get(getUser);
};
export default userRoutes;
