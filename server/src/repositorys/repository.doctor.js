import { query } from "../database/sqlite.js";

const RepositoryDoctors = {
  async Listar(name) {
    let filter = [];

    let sql = "select * from doctors ";
    if (name) {
      sql = sql + "where name like ? "
      filter.push(`%${name}%`);
    }
    sql = sql + "order by name"

    const doctors = await query(sql, filter);

    return doctors;
  },

  async Inserir(name, specialty, icon) {

    let sql = `insert into doctors(name, specialty, icon) values (?, ?, ?) returning id_doctor`;

    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];

  },
  async Editar(id_doctor, name, specialty, icon) {

    // SQL Query to update a record in the "products" table.
    let sql = `update doctors set name = ?, specialty = ?, icon = ? where id_doctor = ?`

    await query(sql, [name, specialty, icon, id_doctor])

    return { id_doctor };
  },

  async Excluir(id_doctor) {
    let sql = `delete from doctors where id_doctor = ?`;

    await query(sql, [id_doctor]);

    return { id_doctor };
  },
  async ListarServices(id_doctor) {
    let sql = `
    SELECT d.id_service, s.description, d.price
    FROM doctors_services d 
    join services s on (s.id_service = d.id_service) 
    WHERE d.id_doctor = ? order by s.description
    `;

    const serv = await query(sql, [id_doctor]);

    return serv;


  },
}

export default RepositoryDoctors;