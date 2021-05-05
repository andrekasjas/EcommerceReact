import React from 'react';
import { useParams } from 'react-router';
function Product() {
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

    const {id}=useParams();

     return (
        <div className="Product">      
            <h1>{productss[id].name} </h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={productss[id].img} className="img-fluid" alt={productss[id].name}/>
                    <br></br>
                    <h3>{productss[id].price}</h3>
                    <a href="/products" className="btn btn-outline-primary btn-block" >Regresar</a>
                </div>
                <div className="col-md-8">
                    <h3>{productss[id].name}</h3>
                    <hr/>
                    <p>{productss[id].description}</p>
                </div>
            </div>
        </div>
     );
   }
    
  
   
   
export default Product;