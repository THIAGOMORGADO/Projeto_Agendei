import { Router } from "express";
import { controllerDoctors } from "../controllers/controller.doctor.js";
import controllerUser from "../controllers/controle.user.js";
import jwt from "../Utils/token.js";

const router = Router();

router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);

// Rotas a baixo so Funciona se eu Informar o Token
router.use(jwt.ValidateToken);

router.get("/doctors", controllerDoctors.Listar);
router.post("/doctors", controllerDoctors.Inserir);
router.put("/doctors/:id_doctor", controllerDoctors.Editar);
router.delete("/doctors/:id_doctor", controllerDoctors.Excluir);

router.get("/doctors/:id_doctor/services", controllerDoctors.ListarServicos);

export default router;
