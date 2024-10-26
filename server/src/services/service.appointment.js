import RepositoryAppointment from "../repositorys/repository.appointment";

const ServiceAppointment = {
  async ListarByUser(name) {
    const appointment = await RepositoryAppointment.Listar(name);

    return appointment;
  }
}
export default ServiceAppointment;