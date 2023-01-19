
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([])
    const[displayProducts,setDisplayProducts] =useState([])
    useEffect(()=>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    },[])
    //load data from local storage
    useEffect(()=>{
       if(products.length){
         const savedCart = getStoredCart();
         const storedCart = []
        for(const key in savedCart){
            const addedProduct = products.find(product => product.key === key)
            if(addedProduct){
                const quantity = savedCart[key]
                addedProduct.quantity =quantity;
                storedCart.push(addedProduct)
            }
            
        }
        setCart(storedCart)
       }
    },[products])

    const handleAddToCart = products => {
        const newCart = [...cart , products]
        setCart(newCart)
        addToDb(products.key)
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matvherProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matvherProduct)
        setDisplayProducts(matvherProduct)

    }
    return (
        
       <>
       <div className='search-container'>
            <input type='text' placeholder='Search Product' onChange={handleSearch}></input>
       </div>
       <div className='shop-container'>
            <div className='product-container'>
                {
                    displayProducts.map(pd => <Product
                    key={pd.key} 
                    pd={pd}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div> 
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;