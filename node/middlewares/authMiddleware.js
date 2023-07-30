const User = require("../models/userModel")
const JWT = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")


const authMiddleware = async (req, res, next) => {
    const token = (req.cookies && req.cookies.refreshToken) || null;
    console.log(token)
    // if (req?.headers?.authorization?.startsWith("Bearer")) {
    //     token = req.headers.authorization.split(" ")[1]

    if(!token){
        return res.status(400).json({
            success: false,
            message:'Not authorized'
        })
    }
    
        try{
                const payload = JWT.verify(token, process.env.JWT_SECRET)
                console.log(payload)
                // const user = await User.findById(decoded?.id)
                req.user= { id: payload.id}
                console.log(req.user)
               
        } catch (error) {
            throw new Error ("Not Authorized token expried, Please Login Again")
        }
        next()
}

const isAdmin = asyncHandler(async (req , res, next) => {
    const { email } = req.user
    const adminUser = await User.findOne( {email} )
    if( adminUser.role != "admin") {
    throw new Error("You are not admin")
    } else {
        next();
    }
})

module.exports = { authMiddleware,isAdmin }