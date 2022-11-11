const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
app.use(express.json());

const port = process.env.PORT || 5001;
const db = require('./prisma/db');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', async (req, res) => {
    const user = await prisma.user.findMany();
    res.json(user);
  });

app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Scurrying on port ${port}`)); //Line 6

// // create a GET route
// app.get('/', async (req, res) => {
//     const user = await prisma.user.findMany();
//     res.json(user);
//   });

// app.get('/express_backend', (req, res) => {
//   //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });

// app.get('/:id', async function (req, res, next) {
//   let id = parseInt(req.params.id)
//   const user = await db.user.findUnique({
//     where: { id },
//   });
//   res.send(user);
// });
