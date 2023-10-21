const img7 = '/images/slider.jpg';
const img8 = '/images/slider1.jpg';
const img9 = '/images/slider2.jpg';

function Banner() {
  return (
    <div className="mt-3">
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img7} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img8} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img9} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Banner;
