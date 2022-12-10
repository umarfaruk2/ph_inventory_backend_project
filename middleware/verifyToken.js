import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export const verifyToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({
                status: "fail",
                error: "You are not logged in"
            })
        }

        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}