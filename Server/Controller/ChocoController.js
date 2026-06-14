import chocolate from "../Model/Model.js"

export const createChoco =async (req,res)=>{
    const {name,price,country}=req.body
try {
    if(!name || !price ||!country){
        res.status(400).json({
            message:"please enter a above fields"
        })
    }
    const newchoco={
        name,
        price,
        country
    }
    const data = await chocolate.Create(newchoco)
    return res.status(201).json({message:data})
} catch (error) {
   console.log(error.message)
   res.status(500).json({message:error.message}) 
}
}