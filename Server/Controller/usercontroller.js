import users from '../Model/usermodel'
export const signup =async()=>{
    const {username,email,password}=req.body || {}
    try {
         if(!username || !email || !password)
        res.status(400).json({"message":"please fill the form"})
    const userexists = await users.findOne({email})

    if(userexists)
        res.status(401).json({"message":"user already exists"})
        const user = new users({
            username,
            email,
            password

        })
        const use= await user.save()
        return res.status(201).json({use})
} catch (error) {
        console.log("error",error)
        return res.status(500).json({"message":"error no user available"})
    }
}
export const login = async()=>{
    const {email,password}=req.body ||{}
try {
    if(!email,!password)
        res.status(400).json({"message":"please fill the form"})
    const existuser = await users.findOne({email})
    if(!existuser)
        res.status(400).json({"message":"give a valid credential"})
    
} catch (error) {
    
}
}