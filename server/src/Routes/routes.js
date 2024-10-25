import { Router } from "express";
import controllerDoctor from "../controllers/controller.doctor.js";
import controllerUser from "../controllers/controle.user.js"
import jwt from '../Utils/token.js'

const router = Router();

router.get("/doctors", jwt.ValidateToken, controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", controllerDoctor.Excluir);


router.post("/users/register", controllerUser.Inserir)
router.post("/users/login", controllerUser.Login)

export default router;