import { DoctorService } from "../services/DoctorServices.js"

export const DoctorController = {
  async ListAllDoctors(req, res) {
    const doctors = await DoctorService.ListAllDoctors();

    if (DoctorService !== undefined) {
      return res.json(doctors)
    }
  }
}

