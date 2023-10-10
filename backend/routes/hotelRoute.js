import { createHotel } from "../controllers/hotelController.js";

const hotelRoutes = (app) => {
  app.route("/createHotel").post(createHotel);
};
export default hotelRoutes;
