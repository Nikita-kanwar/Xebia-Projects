const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <textarea placeholder="Message"></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      
    </div>
  );
};

export default Contact;
