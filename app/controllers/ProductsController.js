import ProductModel from "../models/Product"



class ProductsController  { 


   static async getAllProducts(req,res){
    const allProducts= await ProductModel.find();
    res.send(allProducts);    
    }

    static async createProduct(req,res){
        const product = new ProductModel({
    
            title:req.body.title,
            price:req.body.price,
            image:req.file.filename
        });
        product.save();
        res.send(product); 
    }
  
}

export default  ProductsController;
