import repositoryUser from '../repositorys/repository.user.js'
import { compareHash, hashPass } from '../Utils/hash.js';
import jwt from '../Utils/token.js';

async function Inserir(name, email, password) {

  const passwordHash = await hashPass(password, 10)

  const user = await repositoryUser.Inserir(name, email, passwordHash);

  user.token = jwt.createToken(user.id_user)

  return user;
}
async function Login(email, password) {
  const user = await repositoryUser.ListarByEmail(email);
  const comparePasswords = await compareHash(password, user.password)

  if (user.length == 0) {
    return [];
  } else {
    if (comparePasswords) {
      delete user.password;

      user.token = jwt.createToken(user.id_user)
      return user;
    } else {
      return [];
    }
  }
}

export default { Inserir, Login, }