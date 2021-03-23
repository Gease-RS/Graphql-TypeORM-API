import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
    type:"postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "graphqlts",
    entities: [
      path.join(__dirname, '../model/**/**.ts')
    ],
    synchronize: true
  });
  console.log('Database is Connected')
}