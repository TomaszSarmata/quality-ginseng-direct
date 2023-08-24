import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            src="/images/Acerola Cherry 8,000mg 30 Capsules back-1.jpg"
            alt=""
            className="h-96"
          />
        </h3>
      </div>
    </Slider>
  );
}
