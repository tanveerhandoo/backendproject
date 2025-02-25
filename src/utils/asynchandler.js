const asynchandler = (requestHandler) => {
    (req,res,next)=>{
     Promise.resolve(requestHandler(req,res,next))
     .catch((err)=> next(err))        
    
    }
    
    return 
}
export { asynchandler }



// try catch 


// const asynchand = (fn) => async (req, res, next) => {
//     try {
//     await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//                 success: false,
//                 error: error.message,
//                 statusCode: error.code,
//                 message: error.message,    
//             })
//     }
// }