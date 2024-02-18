import { UserModel } from "db/users"

const signupController = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const userPresent = await UserModel.findOne({email})
    console.log(userPresent)

    if(userPresent) {
        res.status(400).send({error: "User already exists"})
        return
    }
    const newUser = UserModel.create({ email, password })
    res.json({ message: "Signing up user...", email, password, newUser })
}