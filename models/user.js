import pkg from "sequelize";
import DB from "../config/database.js";

const {DataTypes} = pkg;

const Users = DB.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    freezeTableName: true,
    schema: "public"
});

export default Users;
