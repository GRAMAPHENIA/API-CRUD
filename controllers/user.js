const uuid = require("uuid").v4;

const MOCK_USERS = [
  {
    id: uuid(),
    name: "Fang",
    country: "Mexico",
  },
  {
    id: uuid(),
    name: "Bong",
    country: "Plexico",
  }
];

//  CONTROLADOR
const getAllUsers = (req, res) => {
  console.log("🎲  Escuchando a los usuarios  🎲");
  // res.send("🎲  Escuchando a los usuarios  🎲");

  res.status(200).json({
    status: "success",
    data: {
      users: MOCK_USERS,
    },
  });
};

const getUsersById = (req, res) => {
  const { id } = req.params;

  // LLamara la base de datos
  const user = MOCK_USERS.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "Usuario no encontrado, trata con un id correcto.",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
};

//  CONTROLADOR

const saveUser = (req, res) => {
  const body = req.body;
  // TAREA: enviar usuario a DB
  const newUser = {
    id: uuid(),
    name: body.name,
    country: body.country,
  };

  MOCK_USERS.push(newUser);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  // LLamara la base de datos y borrar
  const userIndex = MOCK_USERS.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      status: "failed",
      message: "Usuario no encontrado, trata con un id correcto.",
    });
  }

  MOCK_USERS.splice(userIndex, 1);

  res.status(200).json({
    status: "success",
    data: {
      users: MOCK_USERS,
    },
  });
};

module.exports = {
  getAllUsers,
  getUsersById,
  saveUser,
  deleteUser,
};
