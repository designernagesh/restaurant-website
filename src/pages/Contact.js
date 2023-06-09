const Contact = () => {
  return (
    <section id="contact">
      <h2>Book Your Table</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write here..."></textarea>
        <input type='submit' value='Book' />
      </form>
    </section>
  );
};

export default Contact;
