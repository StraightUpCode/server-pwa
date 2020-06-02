import Sequelize from 'sequelize'
import sequelize from './db.mjs'

const User = sequelize.define('user',{
    username : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.STRING
    }, 
    email : {
        type: Sequelize.STRING
    }
})

export default User