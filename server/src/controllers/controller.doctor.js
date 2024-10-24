import serviceDoctor from "../services/service.doctor.js";


async function Listar(req, res) {
  const name = req.query.name

  const doctors = await serviceDoctor.Listar(name);

  res.status(200).json(doctors);
}

async function Inserir(req, res) {
  const { name, specialty, icon } = req.body;
  const createDocotor = await serviceDoctor.Inserir({ name, specialty, icon })


  return res.json(createDocotor);
}

export default { Listar, Inserir }