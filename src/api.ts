interface Product{

    ProductId:number
    ProductName:string,
    Price:number,
    Quantity:number   
}
function getFunction() :Promise<Product[]>{
    return fetch('/product.json')
    .then(res=>res.json())
    .then(res=>{return res as Product[]})
}
getFunction()
.then(pro=>{
    console.log(pro.map(u => 'ProductId:'+u.ProductId+ '\n' +'ProductName:' +u.ProductName + '\n' +'ProductPrice'+ u.Price+ '\n'+'Quantity' + u.Quantity + '\n'+ '\n').toString())
})
