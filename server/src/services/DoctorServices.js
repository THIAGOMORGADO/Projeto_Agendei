import { DoctorRepository } from "../Repositorys/DoctorRepository.js"

export const DoctorService = {
  async ListAllDoctors() {
    const DoctorAll = await DoctorRepository.ListAllDoctors();
    console.log(DoctorAll)

    return DoctorAll
  }
}