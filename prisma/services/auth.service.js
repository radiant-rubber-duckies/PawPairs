const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createError = require('http-errors');

require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class AuthService {
  static async register(data) {
    data.password = bcrypt.hashSync(data.password, 8);
    let user = await prisma.user.create({
      data,
    });
    data.accessToken = await jwt.signAccessToken(user);
    //TODO: in order to work, data must include location, bio, and care type. Do we want to continue requiring this?

    return data;
  }

  static async login(data) {
    const { username, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      throw createError.NotFound('User not registered');
    }
    console.log('👁USER', user); //TODO: if using "pippin", fetches correct user
    const checkPassword = bcrypt.compareSync(password, user.password);
    console.log('👅USER PASSWORD', user.password); //TODO: correct password & data type
    console.log('👀CHECK PASSWORD', checkPassword); //TODO: returns false (might need to hash passwords in seed file bc works if creating user by registering)
    if (!checkPassword)
      throw createError.Unauthorized('Username or password not valid');
    delete user.password;
    const accessToken = await jwt.signAccessToken(user);

    return { ...user, accessToken };
  }

  static async all() {
    const allUsers = await prisma.user.findMany();

    return allUsers;
  }
}

module.exports = AuthService;
