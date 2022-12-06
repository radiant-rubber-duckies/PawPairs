// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// /* GET  */
// router.get('/:id', async function (req, res, next) {
//   let id = parseInt(req.params.id)
//   const user = await db.user.findUnique({
//     where: { id },
//   });
//   res.send(user);
// });

// module.exports = router;