import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay, Keyboard } from 'swiper';
import FilmCard from './FilmCard';

type Props = {
    movies: any;
    title: string;
};

function SecCard({ movies, title }: Props) {
    // const text = title === 'popular' ? 'Popular' : 'Top Rated 🌟'
    return (
        <>
            <div className='flex justify-between bg-black bg-opacity-70'>
                <h2 className='text-white text-xl font-bold pl-6 py-2'> {title} </h2>
                <h4 className='text-white px-12 py-2 md:font-bold text-sm md:text-lg'>See All</h4>
            </div>
            <div className='bg-black bg-opacity-90 rounded-2xl px-4'>
                <Swiper
                    effect={'fade'}                 
                    spaceBetween={18}
                    slidesPerView={6}
                    slidesPerGroupSkip={1}
                    keyboard={{
                        enabled: true
                    }}
                    //responsive
                    breakpoints={{
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 12,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                          slidesPerGroup:5,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                            slidesPerGroup:6,
                        }
                      }}
                    navigation={true}
                    modules={[Navigation, Autoplay, Keyboard]}
                    className='mySwiper moviesSlider'
                    // autoplay={{
                    //     delay: 8500,
                    //     disableOnInteraction: false,
                    // }}
                   
                >
                    {movies?.map((movie: any, index: number) => (
                        <SwiperSlide key={movie.id}>
                            <div className=' transition ease-in-out delay-150 bg-black hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  hover:scale-105 hover:bg-black duration-300'>
                                <FilmCard
                                    title={movie.title}
                                    release_date={movie.release_date}
                                    poster_path={movie.poster_path}
                                    id={movie.id}
                                    index={index}
                                    isPopular={title === 'Popular'}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    );
}

export default SecCard;
