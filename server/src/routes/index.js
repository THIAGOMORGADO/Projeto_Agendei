import { Router } from 'express'
import { DoctorController } from '../controllers/DoctorController.js';

const router = Router();


router.get('/doctors', DoctorController.ListAllDoctors);


export default router;