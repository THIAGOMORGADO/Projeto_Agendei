import serviceDoctor from "../services/service.doctor.js";


export const controllerDoctors = {
  async Listar(req, res) {
    const name = req.query.name

    const doctors = await serviceDoctor.Listar(name);

    res.status(200).json(doctors);
  },

  async Inserir(req, res) {
    const { name, specialty, icon } = req.body;
    const createDoctor = await serviceDoctor.Inserir(name, specialty, icon)


    return res.status(201).json(createDoctor);
  },
  async Editar(req, res) {
    const { id_doctor } = req.params;
    const { name, specialty, icon } = req.body;

    const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon)


    return res.status(200).json(doctor)
  },
  async Excluir(req, res) {
    const { id_doctor } = req.params;

    const doctor = await serviceDoctor.Excluir(id_doctor)


    return res.status(201).json(doctor)

  },

  async ListarServicos(req, res) {
    const { id_doctor } = req.params
  }

}


