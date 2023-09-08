import { register } from "../controllers/authController.js";

const authRoutes = (app) => {
  app.route("/auth/register").post(register);
};
export default authRoutes;
