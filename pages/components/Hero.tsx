import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={"/Img/crousel1.jpg"}
            className="d-block w-100"
            alt="Carousel_img_1"
            height={920}
            width={1600}
          />
        </div>
        <div className="carousel-item ">
          <Image
            src="/Img/crousel2.jpg"
            className="d-block w-100"
            alt="Carousel_img_1"
            height={920}
            width={1600}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Hero;
