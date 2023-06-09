import aboutImage from '../images/about.png'
const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h2>UPCOMING EVENT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem. Etiam dignissim faucibus luctus. Etiam sollicitudin, mi vel placerat tempor, dolor neque pellentesque erat, a convallis mauris nulla eget turpis.</p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="about image" />
    </div>
    </div>
  );
};

export default About;
