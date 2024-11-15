import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie= (userId,res)=>{
    const token= jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
    res.cookie("jwt",token,{
        mageAge: 15*24*60*60*1000, //in ms
        httpOnly:true,
        sameSite:'strict',
        secure: process.env.NODE_ENV !== 'development'
    })
}