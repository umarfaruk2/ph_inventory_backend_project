import jwt from 'jsonwebtoken';
export const genToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    return token;
}