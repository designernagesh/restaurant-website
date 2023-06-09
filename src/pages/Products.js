import Product from "../components/Product";
import data from '../data/data';

const Products = () => {
  return (
    <section id="products">
        <h2>CHOOSE & ENJOY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem.</p>
      <div className="a-container">
        {
          data.map((item, i) => {
            return (
              <Product item={item} key={i} />
            )
          })
        }
      </div>
    </section>
  );
};

export default Products;
