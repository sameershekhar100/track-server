const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).send({ error: 'You are not logged in1' })
    }

    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'My_Secret_Key', async (err, payload) => {

        if (err) {
            return res.status(401).send({ error: 'You are not logged in2' });
        }
        // return res.status(401).send({ error101: `${payload.userId}      ${token}` })
        const { userId } = payload
        const user = await User.findById(payload.userId);

        req.user = user;
        next();
    })

}