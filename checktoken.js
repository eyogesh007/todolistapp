const jwt=require('jsonwebtoken');
module.exports = function(req, res, next) {
        let token = req.header('usertoken');
        if(!token){
            return res.send('Token Not found');
        }
        let decode = jwt.verify(token,'key')
        if(decode)
        req.user = decode.user
        else
        return null
        next();
}