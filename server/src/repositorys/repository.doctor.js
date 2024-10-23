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


export default { Listar }