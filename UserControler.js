
import user from '../model/UserModel.js';


export const create = async (req, res) => {
try {
    const userData = new User(req.body);
    const {email} = userData.email;
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ error_message: "User already exists" });
    }
    const savedUser = await userData.save();
    res.status(201).json(savedUsers);
} catch (error) {

    res.status(500).json({error:"internal Serve error."});
    }
};
export const fetch  = async (req, res) => {
    try {   

            return res.json("What's up?");

    } catch (error) {

        res.status(500).json({error:"internal Serve error."})
    }

}
