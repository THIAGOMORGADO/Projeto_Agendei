import repoDoctor from "../repositorys/repository.doctor.js";

async function Listar(name) {
  const doctors = await repoDoctor.Listar(name);

  return doctors;
};

async function Inserir(name, specialty, icon) {
  const doctors = await repoDoctor.Inserir(name, specialty, icon);

  return doctors;
}
async function Editar(id_doctor, name, specialty, icon) {

  const doctor = await repoDoctor.Editar(id_doctor, name, specialty, icon)

  return doctor;

}


export default { Listar, Inserir, Editar, };