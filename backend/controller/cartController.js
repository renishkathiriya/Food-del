import userModel from "../models/userModel.js";

// ADD ITEMS TO USER CART
const addtoCart = async (req,res) => {
      try {
            let userData = await userModel.findOne({_id:req.body.userId});
            let cartData = await userData.cartData;
            if (!cartData[req.body.itemId]) {
                  cartData[req.body.itemId] = 1 
            }
            else{
                  cartData[req.body.itemId] +=1
            }
            await userModel.findByIdAndUpdate(req.body.userId,{cartData})
            res.json({success:true,message:"Added To Cart"})
      } catch (error) {
            console.log(error)
            res.json({success:false,massage:"Error"})
      }
}

// REMOVE ITEMS FROM USER CART
const removeFromCart = async (req,res) => {

}

// FETCH USER CART DATA
const getCart = async (req,res) => {

}

export {addtoCart,removeFromCart,getCart}