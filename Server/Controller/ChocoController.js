import chocolate from "../Model/Model.js"

// Create Chocolate

export const createChocolate = async (req, res) => {

  const { choconame, price, quantity, description } = req.body;
      if(!choconame,!price,!quantity,!description)
        res.status(400).json({"message":"please fill the field"})
  try {

    const chocolate = new Chocolate({

      choconame,
      price,
      quantity,
      description,

      // Logged in user
      creator: req.userData.userId

    });

    await chocolate.save();

    res.status(201).json({
      message: "Chocolate Added",
      chocolate
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

    const chocolates = await Chocolate.find({
      creator: req.userData.userId
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


// Get Chocolate By Id

export const getChocolateById = async (req, res) => {

  const {id} = req.params;

  try {

    const chocolate = await Chocolate.findById(id);

    if (!chocolate) {
      return res.status(404).json({
        message: "Chocolate not found"
      });
    }

    res.status(200).json(chocolate);

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

  const { choconame, price, quantity, description } = req.body;

  try {

    const chocolate = await Chocolate.findOne({
      _id: id,
      creator: req.userData.userId
    });

    if (!chocolate) {

      return res.status(404).json({
        message: "Chocolate not found"
      });

    }

    chocolate.name = name;
    chocolate.price = price;
    chocolate.quantity = quantity;
    chocolate.description = description;

    await chocolate.save();

    res.status(200).json({
      message: "Chocolate Updated",
      chocolate
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

    const deletedChocolate = await Chocolate.findOneAndDelete({
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