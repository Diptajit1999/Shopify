//implementing product logic
const { ProductModel } = require("../models/product.model");

// Get All Products
const getAllProducts = async (req, res) => {
  const id=req.params.id;
  try {
    if(id){
      const product = await ProductModel.findById(id);
    return res.status(201).send({ msg: "Getting a single product details", product });
    }
    const products = await ProductModel.find();
    res.status(201).send({ msg: "Getting all products", products });
  } catch (error) {
    console.log("Error in getting all products:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// Creating or adding a new product ---> admin acess only
const createProduct = async (req, res) => {
  const payload = req.body;

  try {
    const product = new ProductModel(payload);
    await product.save();
    res.status(201).send({ msg: "A new product has been added", product });
  } catch (error) {
    console.error("Error in creating product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// Updating a product ---> admin access only
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updates = req.body;

  try {
    let product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updates,
      { new: true,runValidators:true,useFindAndModify:false }
    );
    res
      .status(201)
      .send({ msg: "The product has been updated", updatedProduct });
  } catch (error) {
    console.error("Error in updating product:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const deleteProduct= async(req,res)=>{
  const id=req.params.id;
try {
  const product=await ProductModel.findByIdAndDelete(id)
  if(!product){
    return res.status(404).send({success:false,msg:"product not found"})
  }

  res.status(202).send({msg:"product successfully deleted"});
} catch (error) {
  res.status(500).send({ msg: error });
}
}
module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
