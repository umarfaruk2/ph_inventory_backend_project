import jwt from 'jsonwebtoken';
export const genToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    const token = jwt.sign(payload, process.env.JWT_TOKEN, {
        expiresIn: '20'
    });
    return token;
}