import { Router } from "express";
import controllerDoctor from "../controllers/controller.doctor.js";
import controllerUser from "../controllers/controle.user.js"

const router = Router();

router.get("/doctors", controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", controllerDoctor.Excluir);


router.post("/users/register", controllerUser.Inserir)

export default router;