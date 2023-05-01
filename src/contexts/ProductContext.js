import React, {createContext, useState, useEffect} from 'react';

// CreateContext 
export const ProductContext = createContext()



const ProductProvider = ({children}) => {
  // Products State 
  const [products, setProducts] = useState([])
  // Fetch Products 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
     
    }
    fetchProducts()
  }, []);
  console.log(products)
  return (
<ProductContext.Provider
value={{products}}
>
  {children}
</ProductContext.Provider>
  )
};

export default ProductProvider;
