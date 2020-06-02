import dotenv from 'dotenv'
dotenv.config()

import Sequelize from 'sequelize'


const host= process.env.DB_HOST
const database= process.env.DB_NAME
const username= process.env.DB_USER
const password= process.env.DB_PASS
console.log(host, database, username, password)

let sequelize
if(!process.env.DATABASE_URL){
    sequelize = new Sequelize(
        database,
        username,
        password,
        {
            host: host,
            dialect: 'postgres'
        })
}else{
    sequelize = new Sequelize(process.env.DATABASE_URL)
}


export default sequelize