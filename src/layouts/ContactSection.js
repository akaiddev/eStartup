import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section id='contact' className='padd-section'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>Contact</h2>
          <p className='separator'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className='row justify-content-center' data-aos='fade-up' data-aos-delay={100}>
          <div className='col-lg-3 col-md-4'>
            <div className='info'>
              <div>
                <i className='bi bi-geo-alt' />
                <p>
                  A108 Adam Street
                  <br />
                  New York, NY 535022
                </p>
              </div>
              <div className='email'>
                <i className='bi bi-envelope' />
                <p>info@example.com</p>
              </div>
              <div>
                <i className='bi bi-phone' />
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
            <div className='social-links'>
              <Link to='#' className='twitter'>
                <i className='bi bi-twitter' />
              </Link>
              <Link to='#' className='facebook'>
                <i className='bi bi-facebook' />
              </Link>
              <Link to='#' className='instagram'>
                <i className='bi bi-instagram' />
              </Link>
              <Link to='#' className='linkedin'>
                <i className='bi bi-linkedin' />
              </Link>
            </div>
          </div>
          <div className='col-lg-5 col-md-8'>
            <div className='form'>
              <form >
                <div className='form-group'>
                  <input type='text' name='name' className='form-control' id='name' placeholder='Your Name' required />
                </div>
                <div className='form-group mt-3'>
                  <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' required />
                </div>
                <div className='form-group mt-3'>
                  <input type='text' className='form-control' name='subject' id='subject' placeholder='Subject' required />
                </div>
                <div className='form-group mt-3'>
                  <textarea className='form-control' name='message' rows={5} placeholder='Message' required defaultValue={''} />
                </div>
                <div className='my-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message' />
                  <div className='sent-message'>Your message has been sent. Thank you!</div>
                </div>
                <div className='text-center'>
                  <button type='submit' className='btn btn-info'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
