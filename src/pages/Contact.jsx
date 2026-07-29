import "./Contact.css";
import Footer from '../components/Footer'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();


    if (name.length < 3) {
      alert(" Name must contain at least 3 characters.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert(" Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
      alert(" Please enter a valid 10-digit phone number.");
      return;
    }

    alert(
      " Booking Successful!\n\nYour table has been reserved successfully."
    );

    e.target.reset();
  };

  return (
    <div>
      <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Reserve Your Table</h2>
          <p>Book your table and enjoy authentic Andhra cuisine.</p>

          <h3>📍 Address</h3>
          <p>Rajahmundry, Andhra Pradesh</p>

          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>

          <h3>✉ Email</h3>
          <p>balagayathri@gmail.com</p>
          <p>🕒 Open: 10:00 AM – 11:00 PM</p>

          <p>🚚 Home Delivery Available</p>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">Book Now</button>

        </form>

      </div>
    </section>
    <Footer/>
    </div>
    
  );
}

export default Contact;