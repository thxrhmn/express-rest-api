const { QueryTypes } = require('sequelize');
const db = require('../database/connection');

exports.addUsers = async (req, res) => {
  try {
    const { name, email, password, status } = req.body;

    const query = `INSERT INTO users (name, email, password, status) VALUES ('${name}', '${email}', '${password}', '${status}')`;
    await db.sequelize.query(query);
    
    res.send({
      status: 'success',
      message: 'User successfully added',
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'server error'
    })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const query = `SELECT * FROM users`;
    const data = await db.sequelize.query(query, { types: QueryTypes.SELECT });
    
    res.send({
      status: 'success',
      data,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'server error'
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await db.sequelize.query(`SELECT * FROM users WHERE id = ${id}`, { type: QueryTypes.SELECT });

    res.send({
      status: 'success',
      data,
    })
  } catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'server error'
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, email, password, status } = req.body;

    const query = `
      UPDATE users 
      SET name = '${name}', 
      email = '${email}', 
      password = '${password}', 
      status = '${status}' 
      WHERE id = '${id}'
    `
    await db.sequelize.query(query);

    res.send({
      status: 'success',
      message: `user ${id} has been updated`,
      data: req.body,
    })
  }catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'server error'
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const query = `DELETE FROM users WHERE id = ${id}`;

    await db.sequelize.query(query);

    res.send({
      status: 'success',
      message: `User ${id} deleted successfully`
    })
  }catch (err) {
    console.log(err);
    res.send({
      status: 'failed',
      message: 'server error'
    })
  }
}