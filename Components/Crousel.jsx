import React from 'react'
import background from '../src/assets/background.jpg'
import bg2 from '../src/assets/bg2.jpg'
import bg3 from '../src/assets/bg3.jpg'
import bg4 from '../src/assets/bg4.jpg'
import App from '../src/App'
import '../src/index.css'
const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: '105vh' }}>
          <div className="carousel-item active" style={{ height: '95vh' }}>
            <img src={background} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 style={{ fontSize: 75 }}>
                Fabrication & <span style={{ color: 'var(--accent-color)' }}>Mobile Welding</span> <br /> in Sydney
              </h1>
              <p style={{ fontSize: 20, letterSpacing: 3 }}>
                We are certified fabricator & welder in Sydney. We believe in providing top quality workmanship
              </p>
              <div>
                <button className="btn button-primary me-2">Call us now</button>
                <button className="btn button-secondary">Get in touch</button>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '95vh' }}>
            <img src={bg2} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 style={{ fontSize: 75 }}>Premier Fabrication & Welding  <span style={{color: 'var(--accent-color)'}}>Excellence in Every Weld</span></h1>
              <p style={{ fontSize: 20, letterSpacing: 3 }}>
              Top-tier services for all your welding and fabrication needs in Sydney
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '95vh' }}>
            <img src={bg3} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <h1 style={{ fontSize: 75 }}>Expert Welding & Fabrication<br></br> <span style={{color: 'var(--accent-color)'}}>Quality You Can Trust</span> </h1>
              <p style={{ fontSize: 20, letterSpacing: 3 }}>
              Delivering exceptional craftsmanship and reliable solutions.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
