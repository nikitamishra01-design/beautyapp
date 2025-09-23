
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';

import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  const AddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="detail-page">
      <div className="detail">
        <img src={product.image} alt={product.name} />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
            <p>{product.category}</p>
          <h3>₹{product.price}</h3>
          <button className="btn" onClick={AddToCart}>
            Add to Cart
          </button>
           
           
        </div>
      </div>
        <button  style={{margin:"25px"}} onClick={() => navigate("/cart")} >
        Go to the cart</button>
      

    
    
       <h1 style={{textAlign:"center",  position: "sticky",}}>Related Products</h1>

       {/* ✅ Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <div className="related-list">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="related-item">
                <Link to={`/product/${rel.id}`}>
                  <img src={rel.image} alt={rel.name} />
                  <h4>{rel.name}</h4>
                  <p>{rel.category} </p>
                  <p>₹{rel.price} </p>
                  <button onClick={()=>navigate('/product/${id}')} style={{color:"black",background:"white"}}>click</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail; 