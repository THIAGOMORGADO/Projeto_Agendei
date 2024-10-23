import serviceDoctor from "../services/service.doctor.js";


async function Listar(req, res) {
  const name = req.query.name

  const doctors = await serviceDoctor.Listar(name);

  res.status(200).json(doctors);
}

async function Inserir(req, res) {
  const { name } = req.body;

  const data = {
    name
  }

  return res.json(data);
}

export default { Listar, Inserir }