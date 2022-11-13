import express from 'express';
import uploader from '../utils/uploader'
import ProductsController from '../controllers/ProductsController'






const router = express.Router(); 

router.get("/", ProductsController.getAllProducts);


    

router.post("/",uploader.single("image"),ProductsController.createProduct);



 export default router;