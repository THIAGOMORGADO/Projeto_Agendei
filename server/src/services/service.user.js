import repositoryUser from '../repositorys/repository.user.js'
import { hashPass } from '../Utils/hash.js';

async function Inserir(name, email, password) {

  const passwordHash = await hashPass(password, 10)

  const user = await repositoryUser.Inserir(name, email, passwordHash);

  return user;
}

export default { Inserir }