import { ConnectionOptions } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

//if synchronize ko false kar denge then the db ke andar the tables are not created automatically

//pehle sync true rkho check karo ki build karke fir run karek ki hore ki nai
//then make it( false and run the start script only and then do the migrations
//with the command npm run migration:generate -- UserMigration//chheck package.json
//then migration run wala thing)
//true karne se apne aap sync hota rehta hai khud nai karna padta migration
const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};

export default config;
