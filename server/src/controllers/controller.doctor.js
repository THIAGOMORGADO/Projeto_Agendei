import serviceDoctor from "../services/service.doctor.js";


async function Listar(req, res) {
  const name = req.query.name

  const doctors = await serviceDoctor.Listar(name);

  res.status(200).json(doctors);
}

async function Inserir(req, res) {
  const { name, specialty, icon } = req.body;
  const createDoctor = await serviceDoctor.Inserir(name, specialty, icon)


  return res.status(201).json(createDoctor);
}
async function Editar(req, res) {
  const { id_doctor } = req.params;
  const { name, specialty, icon } = req.body;

  const doctor = await serviceDoctor.Editar(id_doctor, name, specialty, icon)


  return res.status(200).json(doctor)
}
async function Excluir(req, res) {
  const { id_doctor } = req.params;

  const doctor = await serviceDoctor.Excluir(id_doctor)


  return res.status(201).json(doctor)

}




export default { Listar, Inserir, Editar, Excluir };