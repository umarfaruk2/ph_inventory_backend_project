import { loginService, signUpService } from "../services/user.services.js";
import bcrypt from 'bcrypt';
import userModel from "../models/userSchema.js";
import { genToken } from "../utility/jwt_token.js";

export const signUpController = async (req, res, next) => {
    try {
        const user = await signUpService(req.body);
        if (!user) {
            res.status(403).json({
                message: "user already have an account"
            })
        } else {
            res.status(200).json({
                message: "User create successfully",
                data: user
            })
        }
    } catch (error) {
        next(error);
    }
}


export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            res.status(401).json({
                status: "fail",
                message: "Please provide user credentials"
            })
        } else {
            const user = await loginService(email);
            if (!user) {
                res.status(401).json({
                    status: 'fail',
                    message: "No user found. Please sign up first"
                })
            } else {
                // const comPass = userModel.comparePass(password, user.password);
                const comPass = bcrypt.compareSync(password, user.password);
                if (!comPass) {
                    res.status(401).json({
                        status: 'fail',
                        message: "Email or password does't match try again"
                    });
                } else {
                    if (user.status != "active") {
                        res.status(401).json({
                            status: 'fail',
                            message: "Your account is not active. Please active your account"
                        });
                    } else {
                        const token = genToken(user);
                        const {password: pwd, ...others} = user.toObject();
                        res.status(200).json({
                            status: "success",
                            message: "Login successfully",
                            data: {
                                user: others, 
                                token
                            }
                        })
                    }
                }
            }
        }
        
    } catch (error) {
        next(error);
    }
}


