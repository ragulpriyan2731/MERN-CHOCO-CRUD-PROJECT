import chocolate from "../Model/Model.js"

export const getALLChoco = async (req,res) => {
    try {
        const alldata = await chocolate.find()
        return res.status(200).json({
            count:alldata.length,
            data:alldata
        })
    } catch (error) {
       console.log(error.message) 
       return res.status(500).json({message:"data is not found"})
    }
}

export const createChoco = async (req, res) => {
    
    try {
        const { choconame, price, country } = req.body || {}
        

        const data =new chocolate ({
            choconame,
            price,
            country
        })
        const choco = await data.save()
        return res.status(201).json({ choco });

    } catch (error) {
        console.log(error.message);

        return res.status(500).json({
            message: error.message
        });
    }
};

