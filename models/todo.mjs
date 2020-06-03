import Sequelize from 'sequelize'
import sequelize from './db.mjs'
import UserModel from './user.mjs'


const Todo = sequelize.define('todo',{
    localId : {
        type: Sequelize.STRING
    }, 
    todo : {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM ,
        values: ['pendiente', 'realizado']
    },
    endDate : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})


export default Todo