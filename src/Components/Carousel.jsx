import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = ({ images }) => {
  const slides = images.map((imageSrc, index) => (
    <div key={index} data-src={imageSrc} />
  ));

   const sliderStyles = {
    '--organic-arrow-thickness': '5px',
    '--organic-arrow-border-radius': '12px',
    '--organic-arrow-height': '50px',
    '--organic-arrow-color': '#26456f',
    '--control-button-width': '7%',
    '--control-button-height': '26%',
    '--control-button-background': 'transparent',
    '--control-bullet-color': '#2d5182',
    '--control-bullet-active-color': '#26456f',
    '--loader-bar-color': '#6e87d4',
    '--loader-bar-height': '6px',
  };

   return (
    <AwesomeSlider 
    mobileTouch={true}
    arrows={true}
    style={sliderStyles}
    className='mb-6'
      bullets={true}
      cssModule={false}
      organicArrows={true}
      infinite={true}
      interval={1000}
      buttons={true}
      media={[
        { breakpoint: 480, settings: { slidesToShow: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
      ]}
    >
      {slides}
    </AwesomeSlider>
  );
};

export default Carousel;
