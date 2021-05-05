import React from 'react';
import { BrowserRouter as Router,Link} from "react-router-dom";
function Products() {
    
    const productss=[
        {
            name:'Portátil Huawei ',
            description:'Matebook 13',
            img:'/img/huawei.JPG',
            price:'3.379.900'
        },
        {
            name:'Portátil Asus ',
            description:'X409ma-bv155t',
            img:'/img/asus.JPG',
            price:'1.219.900'
        },
        {
            name:'Portatil Dell',
            description:'Inspiron 3493',
            img:'/img/dell.JPG',
            price:'1.899.900'
        },
        {
            name:'Portátil Hp',
            description:'255 G7 Amd Athlon',
            img:'/img/hp.JPG',
            price:'1.339.900'
        },
        {	
            name:'Portátil Acer',
            description:'34fr',
            img:'/img/acer.JPG',
            price:'1.759.900'
        },
        {
            name:'Lenovo Ideapad',
            description:'L340 I5 9300h',
            img:'/img/lenovo.JPG',
            price:'3.299.999'
        },
        {
            name:'Macbook',
            description:'Air 2020',
            img:'/img/makbuk.JPG',
            price:'4.394.000'
        }
    ];
    
    const listproducts= productss.map((product,i) =>
    <Router>
        <div className="card" > 
            <img src={product.img} className="card-img-top"/>
            <div className="card-body"> 
                <h5 className="card-title">{product.name}</h5> 
                <p className="card-text">{product.price}</p> 
                <Link to={`/product/${i}`} type="button" class="btn btn-primary btn-block">ver mas</Link>
            </div> 
        </div>
        </Router>
    );

     return (
        <div className="Products">      
        <div className="card-columns">
                {listproducts}
            </div>
        </div>
     );
   }
    
  
   
   
export default Products;