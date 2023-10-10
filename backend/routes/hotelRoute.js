import { createHotel, getHotels } from "../controllers/hotelController.js";

const hotelRoutes = (app) => {
  app.route("/createHotel").post(createHotel);

  app.route("/hotels").get(getHotels);
};
export default hotelRoutes;
