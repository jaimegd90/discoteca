import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const items = [
 
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/378822034_997992008216965_7582380744367387253_n.png',
    key: 2,
  },
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/380886719_1002534824429350_5036653470660078112_n.png',
    key: 3,
  },
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/376416604_994361628580003_7450967296438638868_n.png',
    key: 4,
  },
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/375137615_994361668579999_7483809535866737499_n.png',
    key: 5,
  }
  ,
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/380661076_1002534831096016_7683699503729645874_n.png',
    key: 6,
  }
  ,
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/380694683_1002534817762684_3547847254037080111_n.png',
    key: 7,
  }
  ,
  {
    src: 'https://www.salaspectrum.com/wp-content/uploads/2023/10/380873256_1002534827762683_2356579958872126785_n.png',
    key: 8,
  }
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;