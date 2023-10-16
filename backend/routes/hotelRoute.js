import { createHotel, deleteHotels, getHotel, getHotels, updateHotels } from "../controllers/hotelController.js";

const hotelRoutes = (app) => {
  app.route("/createHotel").post(createHotel);

  app.route("/hotels").get(getHotels);


  app.route("/hotel/:HotelID").get(getHotel)
  app.route("/hotel/:HotelID").put(updateHotels)
  app.route("/hotel/:HotelID").delete(deleteHotels)
};
export default hotelRoutes;
