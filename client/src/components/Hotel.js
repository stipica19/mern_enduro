import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { hotel } from './data/SlideData';
import { useTranslation } from 'react-i18next';

const Hotel = () => {
  const { t } = useTranslation();
  return (
    <section className="hotel stats">
      <div className="container">
        <h3 className=" text-center">{t('hotel_title')}</h3>
        <p></p>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {hotel &&
            hotel.map((hotel, key) => {
              return (
                <SwiperSlide key={key}>
                  <img src={hotel.url} alt={hotel.alt} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Hotel;
