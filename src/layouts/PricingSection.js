import React from 'react'
import { Link } from 'react-router-dom'

const PricingSection = () => {
  return (
    <section id='pricing' className='padd-section text-cente'>
      <div className='container' data-aos='fade-up'>
        <div className='section-title text-center'>
          <h2>Meet With Price</h2>
          <p className='separator'>Integer cursus bibendum augue ac cursus .</p>
        </div>
        <div className='row' data-aos='fade-up' data-aos-delay={100}>
          <div className='col-md-6 col-lg-3'>
            <div className='block-pricing'>
              <div className='table'>
                <h4>basic</h4>
                <h2>$29</h2>
                <ul className='list-unstyled'>
                  <li>
                    <b>4 GB</b> Ram
                  </li>
                  <li>
                    <b>7/24</b> Tech Support
                  </li>
                  <li>
                    <b>40 GB</b> SSD Cloud Storage
                  </li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className='table_btn'>
                  <Link to='#' className='btn'>
                    <i className='bi bi-cart' /> Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='block-pricing'>
              <div className='table'>
                <h4>PERSONAL</h4>
                <h2>$29</h2>
                <ul className='list-unstyled'>
                  <li>
                    <b>4 GB</b> Ram
                  </li>
                  <li>
                    <b>7/24</b> Tech Support
                  </li>
                  <li>
                    <b>40 GB</b> SSD Cloud Storage
                  </li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className='table_btn'>
                  <Link to='#' className='btn'>
                    <i className='bi bi-cart' /> Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='block-pricing'>
              <div className='table'>
                <h4>BUSINESS</h4>
                <h2>$29</h2>
                <ul className='list-unstyled'>
                  <li>
                    <b>4 GB</b> Ram
                  </li>
                  <li>
                    <b>7/24</b> Tech Support
                  </li>
                  <li>
                    <b>40 GB</b> SSD Cloud Storage
                  </li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className='table_btn'>
                  <Link to='#' className='btn'>
                    <i className='bi bi-cart' /> Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='block-pricing'>
              <div className='table'>
                <h4>profeesional</h4>
                <h2>$29</h2>
                <ul className='list-unstyled'>
                  <li>
                    <b>4 GB</b> Ram
                  </li>
                  <li>
                    <b>7/24</b> Tech Support
                  </li>
                  <li>
                    <b>40 GB</b> SSD Cloud Storage
                  </li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className='table_btn'>
                  <Link to='#' className='btn'>
                    <i className='bi bi-cart' /> Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
