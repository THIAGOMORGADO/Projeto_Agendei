

const RepositoryAppointment = {
  async ListarByUser(name) {
    let sql = ``;

    const appointments = await query(sql);

    return appointments;

  }
}

export default RepositoryAppointment;