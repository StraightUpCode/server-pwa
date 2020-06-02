import sequelize from './db.mjs'
import TodoModel from './todo.mjs'
import UserModel from './user.mjs'


TodoModel.belongsTo(UserModel)
UserModel.hasMany(TodoModel)
sequelize.sync()
export {
    sequelize,
    TodoModel,
    UserModel

}