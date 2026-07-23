import chocolate from '../Model/Model.js'

// Create Chocolate

export const createChocolate = async (req, res) => {

  const { choconame, price, quantity, description } = req.body;
      if(!choconame || !price ||!quantity||!description)
      return res.status(400).json({"message":"please fill the field"})
  try {

    const newChocolate = new chocolate({

      choconame,
      price,
      quantity,
      description,

      // Logged in user
      creator: req.userData.userId

    });

    await newChocolate.save();

    res.status(201).json({
      message: "Chocolate Added",
      newChocolate
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Failed to create chocolate"
    });

  }

};

// Get Logged User Chocolates

export const getChocolates = async (req, res) => {

  try {

    const chocolates = await chocolate.find({
      // creator: req.userData.userId
    });
    
    res.status(200).json({
      count: chocolates.length,
      chocolates
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Unable to fetch chocolates"
    });

  }

};


// // Get Chocolate By Id

export const getChocolateById = async (req, res) => {

  const {id} = req.params;

  try {

    const chocolates = await chocolate.findById(id);

    if (!chocolates) {
      return res.status(404).json({
        message: "Chocolate not found"
      });
    }

    res.status(200).json(chocolates);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Error"
    });

  }

};


// Update Chocolate

export const updateChocolate = async (req, res) => {

  const {id} = req.params;
    try {

    const chocolates = await chocolate.findOneAndUpdate({
      _id: id,
      creator: req.userData.userId},
      req.body,
        {new:true}
      
    );

    if (!chocolates) {

      return res.status(404).json({
        message: "Chocolate not found"
      });

    }

    await chocolates.save();

    res.status(200).json({
      message: "Chocolate Updated",
      chocolates
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Update Failed"
    });

  }

};


// Delete Chocolate

export const deleteChocolate = async (req, res) => {

  const {id} = req.params;

  try {

    const deletedChocolate = await chocolate.findOneAndDelete({
      _id: id,
      creator: req.userData.userId
    });

    if (!deletedChocolate) {

      return res.status(404).json({
        message: "Chocolate not found"
      });

    }

    res.status(200).json({
      message: "Chocolate Deleted"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Delete Failed"
    });

  }

};