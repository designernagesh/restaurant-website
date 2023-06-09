import Navbar from "./Navbar";

const Header = () => {
  return (
    <section id="main">
      <Navbar />
      <div className="header-heading">
        <h3>
          It's a Great Time for Good Taste of Burger!
        </h3>
        <h1>
        <span>BURGER</span> <br /> FOR  WEEK
        </h1>
        <p className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        <div className="header-btns">
          <a hef="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default Header;
