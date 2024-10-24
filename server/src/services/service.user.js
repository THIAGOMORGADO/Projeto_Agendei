import repositoryUser from '../repositorys/repository.user.js'
import { compareHash, hashPass } from '../Utils/hash.js';

async function Inserir(name, email, password) {

  const passwordHash = await hashPass(password, 10)

  const user = await repositoryUser.Inserir(name, email, passwordHash);

  return res.status(201).json(user);
}
async function Login(email, password) {
  const user = await repositoryUser.ListarByEmail(email);
  const comparePasswords = await compareHash(password, user.password)

  if (user.length == 0) {
    return [];
  } else {
    if (comparePasswords) {
      delete user.password
      return user;
    } else {
      return [];
    }
  }

  return user;
}

export default { Inserir, Login, }