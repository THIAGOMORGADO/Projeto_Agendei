import { Router } from "express";
import controllerDoctor from "../controllers/controller.doctor.js";

const router = Router();

router.get("/doctors", controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);
router.put("/doctors/:id_doctor", controllerDoctor.Editar);
router.delete("/doctors/:id_doctor", controllerDoctor.Excluir);

export default router;