import { query } from "../database/sqlite.js";

async function Listar(name) {
  let filter = [];

  let sql = "select * from doctors ";
  if (name) {
    sql = sql + "where name like ? "
    filter.push(`%${name}%`);
  }
  sql = sql + "order by name"

  const doctors = await query(sql, filter);

  return doctors;
}

async function Inserir(name, specialty, icon) {

  let sql = `insert into doctors(name, specialty, icon) values (?, ?, ?) returning id_doctor`;

  const doctor = await query(sql, [name, specialty, icon]);

  return doctor[0];

}
async function Editar(id_doctor, name, specialty, icon) {

  // SQL Query to update a record in the "products" table.
  let sql = `update doctors set name = ?, specialty = ?, icon = ? where id_doctor = ?`

  const response = await query(sql, [name, specialty, icon, id_doctor])

  console.log("Aqui esta minha query", response)

  return { id_doctor };
}

async function Excluir(id_doctor) {
  let sql = `delete from doctors where id_doctor = ?`;

  await query(sql, [id_doctor]);

  return { id_doctor };
}

export default { Listar, Inserir, Editar, Excluir }