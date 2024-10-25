import jwt from 'jsonwebtoken'


const secretToken = 'l62GxXfjoSKcul02+BJP50T9misYCzlfvnrWynrujUwX9386gX4ezN+QXvadnEXDEo9ts / PI8vLLab9NFxEalA '

export function createToken(id_user) {

  const token = jwt.sign({
    id_user
  }, secretToken, {
    expiresIn: '1d'
  })

  return token
}

export function ValidateToken(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const [bearer, token] = authToken.split(" ");

  jwt.verify(token, secretToken, (err, decoded) => {

    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.id_user = decoded.id_user;

    next();

  })

}

export default { createToken, ValidateToken }