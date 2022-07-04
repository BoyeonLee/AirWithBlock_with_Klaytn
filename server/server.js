require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRouter = require("./router/main_api");
const detailRouter = require("./router/detail_api");
const reserveRouter = require("./router/reserve_api");
const myReservationRouter = require("./router/my-reservation/my_reservation_api");
const getPasswordRouter = require("./router/get_password_api");
const updatePasswordcheckRouter = require("./router/update_passwordcheck_api");
const getKeysRouter = require("./router/get_keys_api");
const reservationStatusRouter = require("./router/host/reservation_status_api");
const registerRouter = require("./router/host/register_api");
const passwordRouter = require("./router/host/password_api");
const myHouseRouter = require("./router/host/my_house_api");
const modifyRouter = require("./router/host/modify_api");
const deleteRouter = require("./router/host/delete_api");
const checkPasswordRouter = require("./router/check_password_api");
const changePasswordRouter = require("./router/change_password_api");
const cancelReservationRouter = require("./router/my-reservation/cancel_reservation_api");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRouter);
app.use("/get_keys", getKeysRouter);
app.use("/detail", detailRouter);
app.use("/reserve", reserveRouter);
app.use("/get_password", getPasswordRouter);
app.use("/update_passwordcheck", updatePasswordcheckRouter);
app.use("/check_password", checkPasswordRouter);
app.use("/change_password", changePasswordRouter);

app.use("/host/register", registerRouter);
app.use("/host/reservation-status", reservationStatusRouter);
app.use("/host/password", passwordRouter);
app.use("/host/my-house", myHouseRouter);
app.use("/host/modify", modifyRouter);
app.use("/host/delete", deleteRouter);

app.use("/my-reservation", myReservationRouter);
app.use("/my-reservation/cancel", cancelReservationRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
