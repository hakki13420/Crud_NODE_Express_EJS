const items=[

];
 
const getAllProducts=(req, res, next) => {    
    res.render('products',{items:items,nameEdit:null});
};


const addProduct=(req,res,next)=>{
    items.push({
        id:items.length+1,
        name:req.body.nameItem
    });
    res.redirect('/products')
}

//edit product
const editProduct=(req,res,next)=>{    
    console.log(items[req.query.id-1]);
    res.render('products',{items:items,nameEdit:items[req.query.id-1].name.trim()})    
}

const removeProduct =(req,res,next)=>{
    console.log(items.indexOf(req.query.id));
    console.log(req.query.id);
    
    items.forEach((item)=>{
        if(item.id==req.query.id) items.splice(items.indexOf(item),1);
    });    
    res.render('products',{items,nameEdit:null})
}


module.exports={
    getAllProducts,
    addProduct,
    editProduct,
    removeProduct
}