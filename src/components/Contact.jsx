import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! If you have any questions, suggestions, or feedback, please feel free to reach out to us.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className='contact-button'>
                <button type="submit">Submit</button>
          </div>
        </form>
        <div className="developer-info">
          <h2>Development Team, ShoppyGlobe</h2>
          <p>Contact: <a href="mailto:sibuspd@gmail.com">sibuspd@gmail.com</a></p>
          <p>Expertise: Freelance Content/SEO Writer and MERN Stack Development</p>
          <p>
            Connect with me:
            <a href="https://github.com/sibuspd" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://linkedin.com/in/sabyasachi-sahani-b667119a" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}
