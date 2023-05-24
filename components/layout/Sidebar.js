/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  })

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className='mobile-header-wrapper-inner'>
          <div className='mobile-header-top'></div>
          <div className='mobile-header-content-area'>
            <div className='perfect-scroll'>
              <div className='mobile-menu-wrap mobile-header-border'>
                <nav>
                  <ul className='mobile-menu font-heading'>
                    <li className={isActive.key == 1 ? 'active' : null}>
                      <span
                        onClick={() => handleToggle(1)}
                        className='menu-expand'
                      ></span>
                      <Link href='/' legacyBehavior>
                        <a className='active'>Home</a>
                      </Link>
                    </li>

                    <li className={isActive.key == 3 ? 'active' : null}>
                      <Link href='/service' legacyBehavior>
                        <a>Services</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 4 ? 'active' : null}>
                      <Link href='/contact' legacyBehavior>
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 2 ? 'active' : ''}>
                      <Link href='/about' legacyBehavior>
                        <a>About</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='site-copyright color-gray-400'>
                © Optimistic Activation 2023. All rights reserved.
                <br />
                Designed by
                <Link
                  href='https://www.linkedin.com/in/chombazm/'
                  legacyBehavior
                >
                  <a>&nbsp; Chomba</a>
                </Link>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  )
}

export default Sidebar
