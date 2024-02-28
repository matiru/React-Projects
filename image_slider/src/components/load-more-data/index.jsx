import React, { useState,useEffect } from "react";
import "./styles.css";


export default function LoadMoreData(){


const [loading, setLoading] = useState(false);
const[products,setProducts] = useState([]);
const[count , setCount] = useState(0);
const[errorMsg,setErrorMsg] = useState(null);
const [disableButton, setDisableButton] = useState(false);



async function fetchProducts() {
    try{
        setLoading(true);
        const responnse =  await fetch(`https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count  * 20}  `  );
        const result = await responnse.json();
        console.log(result);


        if (result && result.products && result.products.length){
            setProducts((prevData) => [...prevData, ...result.products])
            setLoading(false);
        }
    }
    catch(e){
        setErrorMsg(e.message);
        setLoading(false);
    }

}


useEffect(() => {
    fetchProducts();
}   , [count]);

useEffect(() => {
    if (products && products.length === 100) 
        setDisableButton(true);
}
, [products]);



if (loading) {
    return <div>Loading data ! please wait ...</div>;
    }
if (errorMsg !== null) {
    return <div>Something went wrong: {errorMsg}</div>;
    }







    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ? 
                    products.map(item =>( 
                    <div  className = "product "key={item.id} >
                    <img src={item.thumbnail} alt={item.title}/>
                    <text>{item.title}</text>
                    </div>)):
                    <div>No products found</div>
                }
                </div>
            <div className=" button-container"> 
                <button disabled = {disableButton}  onClick ={()=> setCount(count + 1)}>Load More Products</button>

                {disableButton ? 
                 <div>No more products to load </div> : null

                }

 
            </div>
         
        </div>
    )

}