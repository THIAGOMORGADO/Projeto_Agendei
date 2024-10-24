import serviceUser from "../services/service.user.js";



async function Inserir(req, res) {
  const { name, email, password } = req.body;


  const user = await serviceUser.Inserir(name, email, password)

  return res.status(201).json(user);

}
async function Login(req, res) {

  const { email, password } = req.body;
  const user = await serviceUser.Login(email, password)

  if (user.length == 0) {
    return res.status(401).json({
      error: 'Email ou senha invalida'
    })
  } else {
    return res.status(200).json({
      messager: 'User logged in',
      user,
    })
  }
}


export default { Inserir, Login };