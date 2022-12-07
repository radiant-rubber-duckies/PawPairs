const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createError = require('http-errors');

require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

class AuthService {
  static async register(data) {
    const { email } = data;
    data.password = bcrypt.hashSync(data.password, 8);
    let user = prisma.user.create({
      data,
    });
    data.accessToken = await jwt.signAccessToken(user);

    return data;
  }

  static async login(data) {
    const { username, password } = data;
    console.log('🤒DATA', data);
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      throw createError.NotFound('User not registered');
    }
    console.log('👁USER', user);
    const checkPassword = bcrypt.compareSync(password, user.password);
    console.log('👀CHECK PASSWORD', checkPassword);
    console.log('👅USER PASSWORD', typeof user.password);
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

// {
//   "status": true,
//   "message": "User created successfully",
//   "data": {
//       "username": "sommer",
//       "password": "$2a$08$ErQ2xFOJgZtOAzIUneibguCHIqwFo6q5x7WGi1CfvnpYzkLNdf2kO",
//       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7fSwiaWF0IjoxNjcwMzczNTA5fQ.vMU74DKS4-luSN2-GW9WHUXPK_mUQRuDDnLsdsDWvL0"
//   }
// }
