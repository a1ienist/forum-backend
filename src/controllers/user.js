import UserModel from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const REGISTER = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);

        const user = new UserModel({
            name: req.body.name, 
            email: req.body.email,
            password: hash,
        });

        const response = await user.save();

        return res
            .status(201)
            .json({ message: 'User was registered', response });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

const LOGIN = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ message: 'invalid email or password' });
        }

        const isPasswordMatch = bcrypt.compareSync(
            req.body.password,
            user.password
        ); 

        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'invalid email or password' });
        }

        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "12h" } 
        );

        return res
            .status(200)
            .json({ message: 'User logged in successfully', token: token });
    } catch (err) {
        console.log(err); 
        return res.status(500).json({ message: 'Something happened' });
    }
};

export { REGISTER, LOGIN ,};
