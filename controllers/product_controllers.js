const Product=require('../models/product');
module.exports.rent=(req,res)=>{
   return res.render("rent");
}
module.exports.add=(req,res)=>{
    Product.create({
        cost:req.body.cost,
        owner:req.user._id,
        state:"1",
        pincode:req.body.pincode,
        rating:req.body.rating,
        image:req.body.image
    });
    console.log("successfully added in the database");
    return res.redirect('/');
}