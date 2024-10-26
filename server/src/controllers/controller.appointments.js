import ServiceAppointment from "../services/service.appointment";

const ControllerAppointments = {
  async ListarByUser(req, res) {
    const { id } = req.id_user;

    const appointments = await ServiceAppointment.Listar(name);

    return res.status(200).json(appointments);
  }
}

export default ControllerAppointments