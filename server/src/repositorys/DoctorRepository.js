import { db, query } from "../database/sqlite.js";



export const DoctorRepository = {
  async ListAllDoctors() {
    let sql = "SELECT * FROM doctors order by name";

    const doctors = await query(sql, []);

    console.log("Lista de doctors" + doctors)


    return doctors

  }
}