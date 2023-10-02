// Third party imports.
const express = require("express");
// Local imports.
const usersRouter = require("./routes/user");

const app = express();

// MIDDLEWARE.
app.use(express.json()); //para pasar json por el body

// RUTAS.
app.use("/api/v1/users", usersRouter);

//  AGREGANDO ESCUCHA.
app.listen(2020, () => {
  console.log("🪴  Escuchando en el puerto: 2020 🪴");
});
