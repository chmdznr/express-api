import pkg from "sequelize";
import DB from "../config/database.js";

const {DataTypes} = pkg;

const Users = DB.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    freezeTableName: true,
    schema: "public",
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Users;
