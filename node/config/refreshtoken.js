const jwt = require("jsonwebtoken")

const generateRefreshToken = (id) => {
    return jwt.sign ({ id: this.id, email: this.email ,firstname: this.firstname, lastname: this.lastname }, process.env.JWT_SECRET, { expiresIn: "1d"})
}

module.exports = { generateRefreshToken }
