/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useEffect } from 'react'
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className='container'>
          <div className='main-header'>
            <div className='header-left'>
              <div className='header-logo'>
                <Link href='/' legacyBehavior>
                  <a className='d-flex'>
                    {headerStyle ? (
                      <img alt='Optimistic' src='/logos/optimistic-color.svg' />
                    ) : (
                      <img alt='Optimistic' src='/logos/optimistic-dark.svg' />
                    )}
                  </a>
                </Link>
              </div>
              <div className='header-nav'>
                <nav className='nav-main-menu d-none d-xl-block'>
                  <ul className='main-menu'>
                    <li className=''>
                      <Link href='#' legacyBehavior>
                        <a className='active'>Home</a>
                      </Link>
                    </li>

                    <li className=''>
                      <Link href='service' legacyBehavior>
                        <a>Services</a>
                      </Link>
                    </li>
                    <li className=''>
                      <Link href='contact' legacyBehavior>
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li className=''>
                      <Link href='/about' legacyBehavior>
                        <a>About</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className='burger-icon burger-icon-white'
                  onClick={handleOpen}
                >
                  <span className='burger-icon-top' />
                  <span className='burger-icon-mid' />
                  <span className='burger-icon-bottom' />
                </div>
              </div>
            </div>
            <div className='header-right'>
              <div className='block-signin'>
                <Link href='/page-signup' legacyBehavior>
                  <a className='btn btn-default hover-up icon-arrow-right'>
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
