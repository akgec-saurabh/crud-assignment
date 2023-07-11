const express = require("express");

const userRoutes = require("./routes/user-routes");

const app = express();

app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
