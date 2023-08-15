//@ts-nocheck
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay, Pagination, } from 'swiper';

import Slide from '@/components/slide/Slide';

interface props {
    movies: any;
    genreName?: string;
    type?: string;
}

export default function Slides({ movies, genreName, type }: props) {
    return (
        <>
            <div className='bg-black ml-0 left-0'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#fa1616",
                    }}
                    slidesPerView={1}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    // paralex
                    speed={600}
                    
                    navigation={true}
                    pagination={true}
                    modules={[Autoplay, Pagination, Navigation, ]}
                    className='mySwiper paginationSlide'
                    loop={true}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    className='mainSwiper'
                >
                    {movies.map((movie: any, index: string) => (
                        <SwiperSlide key={movie.id}>
                            <Slide
                                className=''
                                title={movie.title}
                                rating={movie.vote_average}
                                release_date={movie.release_date}
                                backdrop_path={movie.backdrop_path}
                                poster_path={movie.poster_path}
                                id={movie.id}
                                type={type}
                                genreName={genreName}
                            />
                        </SwiperSlide>
                    ))}
                  
                </Swiper>
            </div>
        </>
    );
}
