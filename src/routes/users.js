// Importamos la librería de entorno de Express
const express = require("express");

// Creamos el redireccionador
const router = express.Router();

// Aquí traemos todas las funciones que hicimos en el controlador
const { getUser, deleteUser, updateUser, getUserByID } = require("../controllers/users");

// Aquí traemos el autenticador
const authMiddleware = require("../middleware/session");
const { checkCreateUser } = require("../validators/users");

// Aquí colocas el listado de todas las funciones con sus rutas
router.get("/", authMiddleware, getUser);
router.get("/:userID", authMiddleware, getUserByID); // Aquí los parámetros se colocan con :param1/:param2 ...
router.put("/", authMiddleware, checkCreateUser, updateUser);
router.delete("/", authMiddleware, deleteUser);

// Exportamos el redireccionador
module.exports = router;
