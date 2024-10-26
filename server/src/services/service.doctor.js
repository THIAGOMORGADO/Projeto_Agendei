import repoDoctor from "../repositorys/repository.doctor.js";


const ServicesDoctors = {
  async Listar(name) {
    const doctors = await repoDoctor.Listar(name);

    return doctors;
  },

  async Inserir(name, specialty, icon) {
    const doctors = await repoDoctor.Inserir(name, specialty, icon);

    return doctors;
  },
  async Editar(id_doctor, name, specialty, icon) {

    const doctor = await repoDoctor.Editar(id_doctor, name, specialty, icon)

    return doctor;

  },
  async Excluir(id_doctor) {
    const doctor = await repoDoctor.Excluir(id_doctor)

    return doctor;
  },
  async ListarServices(id_doctor) {
    const serv = await repoDoctor.ListarServices(id_doctor);

    return serv;
  }
}

export default ServicesDoctors;
