const { PrismaClient, User } = require('@prisma/client');
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

//postman returns when testing auth endpoint (tho user not there when testing login or all after)
// {
//   "status": true,
//   "message": "User created successfully",
//   "data": {
//       "username": "sommer",
//       "password": "$2a$08$ErQ2xFOJgZtOAzIUneibguCHIqwFo6q5x7WGi1CfvnpYzkLNdf2kO",
//       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7fSwiaWF0IjoxNjcwMzczNTA5fQ.vMU74DKS4-luSN2-GW9WHUXPK_mUQRuDDnLsdsDWvL0"
//   }
// }
