import jwt from 'jsonwebtoken'

const verifyToken = ( req, res, next ) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token)
        return res.status(401).json({ message: 'Access denied. Token issue' });
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    }
    catch(err){
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default verifyToken