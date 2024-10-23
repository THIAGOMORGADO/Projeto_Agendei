import repoDoctor from "../repositorys/repository.doctor.js";

async function Listar(name) {
  const doctors = await repoDoctor.Listar(name);

  return doctors;
}


export default { Listar }