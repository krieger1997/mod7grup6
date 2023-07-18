import { Sequelize } from 'sequelize';

const db = new Sequelize('biblioteca', 'postgres', 'admin', {
    host:'localhost',
    dialect:'postgres' 
});

export default db