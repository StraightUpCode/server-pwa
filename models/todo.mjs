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
    status: {
        type: Sequelize.ENUM ,
        values: ['pendiente', 'resuelto']
    },
    endDate : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})


export default Todo