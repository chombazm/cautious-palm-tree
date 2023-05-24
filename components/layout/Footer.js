/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='footer mt-50'>
        <div className='container'>
          <div className='footer-top'>
            <div className='row'>
              <div className='col-md-4 col-sm-6 text-center text-md-start'>
                <Link href='/' legacyBehavior>
                  <a>
                    {/* <img alt="Agon" src="/assets/imgs/template/logo.svg" /> */}
                    <Image
                      src='/logos/optimistic-color.svg'
                      alt='Optimistic'
                      width={162}
                      height={42}
                    />
                  </a>
                </Link>
              </div>
              <div className='col-md-8 col-sm-6 text-center text-md-end'>
                <span className='color-gray-900 text-heading-6 mr-30 text-mb-sm-20'>
                  Ready to get started?
                </span>
                <Link href='/page-signup' legacyBehavior>
                  <a
                    className='btn btn-square'
                    style={{
                      backgroundColor: '#FFC107',
                    }}
                  >
                    Create an Account
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 width-20 mb-30'>
              <h4 className='text-heading-5'>Contact</h4>
              <div className='mt-20 text-body-text color-gray-600 mb-20'>
                140c off twinpalm road, ibex hill, Lusaka
              </div>
              <div className='mt-20 text-body-text color-gray-600'>
                (096) 6767446
              </div>
              <div className='text-body-text color-gray-600'>
                info@optimistcactivation.com
              </div>
            </div>
            <div className='col-lg-3 width-20 mb-30'>
              <h4 className='text-heading-5'>About Us</h4>
              <ul className='menu-footer mt-20'>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Mission and Vision</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Our Team</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 width-20 mb-30'>
              <h4 className='text-heading-5'>Discover</h4>
              <ul className='menu-footer mt-20'>
                <li>
                  <Link href='/page-pricing-1' legacyBehavior>
                    <a>Plans and Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Knowledge Base</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Cookie Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Office Center</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 width-20 mb-30'>
              <h4 className='text-heading-5'>Support</h4>
              <ul className='menu-footer mt-20'>
                <li>
                  <Link href='/page-faqs-1' legacyBehavior>
                    <a>FAQs</a>
                  </Link>
                </li>

                <li>
                  <Link href='/page-contact' legacyBehavior>
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 width-16'>
              <h4 className='text-heading-5'>Useful links</h4>
              <ul className='menu-footer mt-20'>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Request an offer</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>How we work</a>
                  </Link>
                </li>
                <li>
                  <Link href='/page-pricing-2' legacyBehavior>
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Reviews</a>
                  </Link>
                </li>
                <li>
                  <Link href='/#' legacyBehavior>
                    <a>Stories</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-bottom mt-20'>
            <div className='row'>
              <div className='col-md-6'>
                <span className='color-gray-400 text-body-lead'>
                  © Optimistic Activation 2023. All rights reserved.
                </span>
                <Link href='/page-terms' legacyBehavior>
                  <a className='text-body-text color-gray-400 ml-50'>Privacy</a>
                </Link>

                <Link href='/page-terms' legacyBehavior>
                  <a className='text-body-text color-gray-400 ml-50'>Terms</a>
                </Link>
              </div>
              <div className='col-md-6 text-center text-lg-end text-md-end'>
                <div className='footer-social'>
                  <Link href='https://facebook.com' legacyBehavior>
                    <a className='icon-socials icon-facebook'></a>
                  </Link>
                  <Link href='https://twitter.com' legacyBehavior>
                    <a className='icon-socials icon-twitter'></a>
                  </Link>
                  <Link href='https://www.instagram.com' legacyBehavior>
                    <a className='icon-socials icon-instagram'></a>
                  </Link>
                  <Link href='https://www.linkedin.com' legacyBehavior>
                    <a className='icon-socials icon-linkedin'></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
