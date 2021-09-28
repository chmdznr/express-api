// Get semua users
import Users from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.send(users);
    } catch (err) {
        console.log(err);
    }
}

// Get users berdasarkan id
export const getUsersById = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(users[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create users baru
export const createUsers = async (req, res) => {
    try {
        await Users.create(req.body);
        res.json({
            "message": "Users Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update users berdasarkan id
export const updateUsers = async (req, res) => {
    try {
        await Users.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Users Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete users berdasarkan id
export const deleteUsers = async (req, res) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Users Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
