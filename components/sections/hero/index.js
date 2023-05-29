import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => (
  <div className='section-box'>
    <div
      className='banner-hero banner-homepage6'
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* background video */}
      <div
        className='video-background'
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src='/assets/imgs/super-hero.png'
          alt='Hero image'
          width={1920}
          height={768}
        />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          poster='assets/imgs/super-hero.png'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src='assets/video/hero-min-compressed.mp4' type='video/mp4' />
        </video> */}
      </div>
      <div
        className='container'
        style={{
          position: 'relative',
        }}
      >
        <div className='row'>
          <div className='col-lg-7 mt-50 pb-120'>
            <span className='tag-1 bg-green-900'>
              The Activation Specialist
            </span>
            <h1
              className='text-display-2 mt-20'
              style={{
                color: '#fff',
              }}
            >
              YOUR ONE STOP FOR YOUR BUSINESS
            </h1>
            {/* <h1
              className='text-display-2 mt-20'
              style={{
                color: '#fff',
              }}
            >
              The Fastest way to achieve success
            </h1> */}
            <p
              className='text-body-lead-large color-gray-500 mt-30 pr-40'
              style={{
                color: '#fff',
              }}
            >
              Supercharge you brand with tailor-made
              <br className='d-lg-block d-none' />
              original, scalable, and personable Experiential & Marketing
              campaigns
            </p>
            <div className='mt-40'>
              <Link href='/about' legacyBehavior>
                <a
                  className='btn btn-black bg-green shape-square icon-arrow-right-white'
                  style={{
                    backgroundColor: '#f5ba41',
                  }}
                >
                  About us
                </a>
              </Link>

              {/* <Link href='#' legacyBehavior>
                <a className='btn btn-link icon-triangle color-gray-900 ml-40'>
                  How it works
                </a>
              </Link> */}
            </div>
          </div>
          {/* <div className='col-lg-5 d-none d-lg-block'>
            <div className='banner-imgs'>
              <div className='block-1 shape-1'>
                <img
                  src='/assets/imgs/page/homepage6/line-chart.svg'
                  alt='Agon'
                />
              </div>
              <div className='block-2 shape-3'>
                <img src='/assets/imgs/page/homepage6/card.png' alt='Agon' />
              </div>
              <img
                className='img-banner img-responsive shape-2'
                alt='Agon'
                src='assets/imgs/page/homepage6/banner.png'
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
)
