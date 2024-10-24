import repoDoctor from "../repositorys/repository.doctor.js";

async function Listar(name) {
  const doctors = await repoDoctor.Listar(name);

  return doctors;
};

async function Inserir(name, specialty, icon) {
  const doctors = await repoDoctor.Inserir(name, specialty, icon);

  return doctors;
}


export default { Listar, Inserir };