function Product({ item }) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="a-b-text">
                <h3>{item.title}</h3>
                <a href="#" className="product-btn">Order Now</a>
            </div>
        </div>
    );
  }
  
  export default Product;
  