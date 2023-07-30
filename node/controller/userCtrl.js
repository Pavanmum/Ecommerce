const User = require('../models/userModel')
const userModel = require("../models/signupModel");
const asyncHandler = require("express-async-handler")
const { generateToken } = require('../config/jwtToken')
const validateMongoDbId = require("../utils/validatesMongodbid")
const  {generateRefreshToken} = require("../config/refreshtoken")
const { findById } = require('../models/userModel')
const jwt = require('jsonwebtoken')
const emailValidator = require("email-validator");


 const createUser = asyncHandler( async (req , res ) => {
     const {firstname , lastname, email ,mobile, password} = req.body

    if( !firstname || !lastname || !email || !mobile || !password){
        return res.status(400).json({
            success: false,
            message: "Enter all filed required"
        })
    }

    const validEmail = emailValidator.validate(email);

    if(!validEmail){
        return res.status(400).json({
            success:false,
            message: "Email not verified"
        })
    }

    try {
        // console.log(req.body)
        const newUser = await userModel(req.body);
            const result = await newUser.save();
        
            return res.status(200).json({
                success: true,
                message: result
            });
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                success:false,
                message: "Account already exist with provide email"
            })
        }

        return res.status(400).json({
            success : false,
            message: error.message
        })
    }
})

const loginUserCtrl = asyncHandler (async (req , res) => {
    const {email , password} = req.body
    const findUser = await userModel.findOne({email}).select('+password');

    if (findUser ||  findUser.password === password){
        const refreshToken = await generateRefreshToken(findById?._id)
        const updateaUser = await userModel.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },{ new : true}
            )
        res.cookie("refreshToken", refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
    })
    } else {
        throw new Error("Invalid Credentials")
    }
})


const getUser = async (res, req, next) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success:false,
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


const getallUser = asyncHandler(async (req , res ) => {
    try{
        const getUsers = await User.find()
        res.json(getUsers)
    } 
    catch (error) {
        throw new Error(error)
    }
})

const getaUser = asyncHandler(async (req , res) => {
    const { id } = req.params
    validateMongoDbId(id)
    
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message: error.message

        })
    }
})
const deleteaUser = asyncHandler(async (req , res) => {
    const { id } = req.params
    validateMongoDbId(id)
    
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        })
        
    } catch (error) {
        throw new Error (error);
    }
})

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies
    if( !cookie?.refreshToken) throw new Error ("No Refresh Token in Cookies")
    const refreshToken = cookie.refreshToken
    // console.log(refreshToken)
    const user = await User.findOne({refreshToken})
    if(!user) throw new Error("No Refresh token present in db or not matched")
    jwt.verify(refreshToken,process.env.JWT_SECRET,(err ,decoded) => {
        if (err || user.id == decoded.id) {
              throw new Error ("There is something wrong with refresh token")
        }
        const accessToken = generateToken(user?._id)
        res.json({accessToken})
    })
})

const logout = asyncHandler(async (req , res ) => {
    const cookie = req.cookies
    if( !cookie?.refreshToken) throw new Error ("No Refresh Token in Cookies")
    const refreshToken = cookie.refreshToken
    const user = await User.findOne({refreshToken})
    if (!user) {
        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure: true,
        })
        return res.sendStatus(204)
    }
    await User.findOneAndUpdate(refreshToken,{
        refreshToken:"",
    })
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure: true,
    })
    return res.sendStatus(204)
})

const updateaUser = asyncHandler(async (req , res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const updateaUser = await User.findByIdAndUpdate(_id,{
        firstname: req?.body.firstname,
        lastname: req?.body.lastname,
        email:req?.body.email,
        mobile:req?.body.mobile,
        },{
            new: true
        });

        res.json({
            updateaUser,
        })
        
    } catch (error) {
        throw new Error (error);
    }
})

const blockUser = asyncHandler(async (req, res ) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const block = await User.findByIdAndUpdate(
            id,{
                isBlocked: true,
            },{
                new: true,
            }
        )
        res.json(
        block)
    } catch (error) {
        throw new Error (error)
    }
})
const unblockUser = asyncHandler(async (req, res ) => {
    const { id } = req.params
    validateMongoDbId(id)

    try {
        const unblock = await User.findByIdAndUpdate(
            id,{
                isBlocked: false,
            },{
                new: true,
            }
        )
        res.json({
            message : "User UnBlocked",
        })
    } catch (error) {
        throw new Error (error)
    }
})


module.exports = { createUser , loginUserCtrl , getallUser , getaUser, deleteaUser, updateaUser,blockUser, unblockUser ,handleRefreshToken , logout , getUser}