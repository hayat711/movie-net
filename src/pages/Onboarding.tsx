import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';
import Slides from '@/components/slide/Slides';

type Props = {};

const Onboarding = (props: Props) => {
    return (
        <div>
            <main>
                <section style={{ backgroundImage: `url(/bg.jpg)` }} className='w-full min-h-full relative'>
                    <div className='min-h-screen pt-16 bg-black bg-opacity-70'>
                        <section className='mt-52 min-h-[95%]'>
                            <div
                                className='file:///home/hayat/Desktop/Code/Tving/Frontend/public/bg.jpg
                    flex items-center flex-col gap-3 justify-center animate-pulse'
                            >
                                <p className='font-bold text-4xl text-white'>티빙 오리지널 콘텐츠,</p>
                                <p className='font-bold text-4xl text-white'>방송, 영화, 해외시리즈까지!</p>
                                <p className='font-bold text-4xl text-white'>재미를 플레이해보세요.</p>
                                <p className='text-gray-300 text-sm'>간편하게 가입하고, 원하실 때 해지할 수 있어요.</p>
                                <button className='animate-bounce btn rounded-md hover:bg-red-500 px-10 mt-2 text-2xl bg-red-700 text-white flex py-4'>
                                    <div className='pr-3'>
                                        <img src='/tving.png' alt='tving' width={35} height={35} />
                                    </div>
                                    지금 바로, 티빙을 플레이 하세요!
                                </button>
                            </div>
                        </section>
                        <section className='text-white bg-black bg-opacity-60 border-collapse border-hidden p-4 mt-48 font-bold text-4xl flex flex-col items-center'>
                            <h1 className='bg-black bg-opacity-5'>티빙에만 있는 재미</h1>
                            <h2 className='bg-black bg-opacity-5'>오리지널 콘텐츠를 만나보세요!</h2>
                            <h3 className='bg-black bg-opacity-5'>차별화된 웰메이드 오리지널 콘텐츠</h3>
                        </section>
                    </div>
                </section>
            </main>
            <section>
                <section className='bg-black m-h-screen py-20'>
                    <div className='flex flex-col justify-center items-center gap-3 text-white'>
                        <p className='text-4xl font-bold '>내가 찾던 재미</p>
                        <p className='text-2xl text-gray-200'>보고 싶은 콘텐츠를 발견하세요!</p>
                        <p className='text-xl text-gray-300'>
                            최신, 인기 TV프로그램, 영화, 해외시리즈, 파라마운트+ 오리지널 및 독점
                        </p>
                    </div>
                    {/* 2 div each with swiper slides which moves aut*/}
                    <div></div>
                    <div></div>
                </section>

                <section className='bg-black flex justify-center items-center'>
                    <div className='mi-h-screen'>
                        <video controls autoPlay width='800' height='500'>
                            <source src='/river.mp4' type='video/mp4' />
                        </video>
                    </div>
                </section>
                <section className='bg-black m-h-screen py-20 '>
                    <div className='flex flex-col justify-center items-center gap-3 text-white'>
                        <p className='text-4xl font-bold '>똑똑하게 보는 재미</p>
                        <p className='text-2xl text-gray-200'>최신 방송을 가장 빠르고 간편하게 시청하세요</p>
                        <p className='pb-10 text-xl text-gray-300'>
                            실시간TV,퀵VOD,타임머신 기능으로 기다리지말고 편리하게 시청
                        </p>
                        <video controls autoPlay preload='auto'>
                            <source src='/with_all.mp4' type='video/mp4' />
                        </video>
                    </div>
                </section>
                <section className='bg-black m-h-screen py-20'>
                    <div className='flex flex-col justify-center items-center gap-3 text-white'>
                        <p className='text-4xl font-bold '>함께 즐기는 재미</p>
                        <p className='text-2xl text-gray-200'>다양한 기기로 즐겨보세요!</p>
                        <p className='text-2xl text-gray-200'>스마트폰,태블릿,PC,TV,크롬캐스트에서 시청</p>
                        <p className='pb=10 text-xl text-gray-300'>최대4명의 지인들과 함께 구독</p>
                        <video controls autoPlay preload='auto'>
                            <source src='/devices.mp4' type='video/mp4' />
                        </video>
                    </div>
                </section>

                <section className='bg-black m-h-full py-20'>
                    <div className='flex flex-col gap-3 justify-center items-center text-white min-h-screen'>
                        <p className='text-2xl '>No.1 콘텐츠 플랫폼 TVING</p>
                        <p className='text-7xl font-extrabold'>TVING</p>
                        <p className='text-2xl text-gray-200'>지금 시작해보세요</p>
                        <button className='btn rounded-md hover:bg-red-500 px-10 mt-2 text-2xl bg-red-700 text-white flex py-4'>
                            <div className='pr-3'>
                                <img src='/tving.png' alt='tving' width={35} height={35} />
                            </div>
                            지금 바로, 티빙을 플레이 하세요!
                        </button>
                    </div>
                </section>
                {/* Gragident */}
                <section className='bg-black min-h-screen flex flex-col justify-start items-center'>
                    <h1 className='font-bold text-white mx-auto'>자주 찾는 질문</h1>
                    <div className='text-white'>
                        <ul className='flex flex-col px-16 justify-start items-start'>
                            <li>[회원] 티빙 회원가입 방법이 궁금해요.</li>
                            <li>[로그인] 티빙 로그인 방법이 궁금해요</li>
                            <li>[로그인] 자동 로그아웃이 되었는데, 제 계정을 모르겠어요</li>
                            <li>[로그인] 이용권이 있는 계정이 무엇인지 찾고 싶어요.</li>
                            <li>[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?</li>
                            <li>[요금제] 티빙 라이트 이용권이 무엇인가요?</li>
                            <li>[콘텐츠] 티빙 오리지널 콘텐츠가 무엇인가요?</li>
                            <li>[요금제] 티빙 라이트 이용권은 어떻게 등록하나요?</li>
                            <li>[인증] 성인인증은 어떻게 하나요?</li>
                            <li>[결제] 애플/구글 인앱결제 후 이용권 확인이 안돼요</li>
                        </ul>
                    </div>
                </section>
            </section>
            <footer>{/* import from the main page */}</footer>
        </div>
    );
};

export default Onboarding;
