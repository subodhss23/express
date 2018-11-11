const express = require('express');
let router = express.Router();

//instead of:
// app.get(...)
// we are doing:
// router.get(...)

router.get('/', (req, res, next) => {
    res.json({
        msg: "This shit is working"
    })
})

module.exports = router;