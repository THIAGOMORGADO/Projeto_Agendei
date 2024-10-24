import bcrypt from 'bcrypt';


export async function hashPass(passord, roud) {
  const salt = await bcrypt.genSalt(roud);
  const hash = await bcrypt.hash(passord, salt);

  return hash;
}
export async function compareHash(password, oldPassword,) {

  const isMatch = await bcrypt.compare(password, oldPassword);

  return isMatch;


}

export default { hashPass, compareHash };

