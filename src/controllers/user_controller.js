import {asynchandler} from '../utils/asynchandler.js'

const registerUser=async (req,res)=> {
    res.status(200).json({
        message: 'User registered successfully'
    })
}

export {registerUser}
