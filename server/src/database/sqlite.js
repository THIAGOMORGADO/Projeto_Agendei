// Criando a connection String para conexao do banco de dados

import sqlite3 from 'sqlite3';


function query(command, params, method = 'all') {
  return new Promise(function (resolve, reject) {
    db[method](command, params, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}


const SQLITE = sqlite3.verbose();

const db = new SQLITE.Database('./src/database/banco.db', SQLITE.OPEN_READWRITE, (err) => {
  if (err) {
    return console.log("Erro na conexao do banco de dados" + err.message)
  }
});

export { db, query };