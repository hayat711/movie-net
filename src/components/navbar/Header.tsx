//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Search from '../search/Search';
import Sidebar from '../sidebar/Sidebar';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';

type Props = {};

const Header = (props: Props) => {
    const [navbar, setNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const changeBg = () => {
            if (window.scrollY >= 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMenu(false);
            }
        };

        window.addEventListener('scroll', changeBg);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', changeBg);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className=''>
            <div
                className={`px-5  sm:px-10 flex justify-between  bg-opacity-10 p-3 z-10 fixed right-0 left-0 ${
                    navbar ? 'bg-neutral-900 bg-opacity-80 backdrop-blur-lg ' : ''
                }`}
            >
                <ul
                    className={`flex flex-row ${
                        showMenu ? 'justify-start gap-0' : 'justify-between'
                    } items-center gap-8 sm:gap-16 cursor-pointer`}
                >
                    <Link href={'/'} className=''>
                        {/* <img src="tving.png" alt="" className='w-8 h-8' /> */}
                        <span className='font-bold  text-md sm:text-2xl  items-center text-white -ml-2 xl:pr-8 pr-6 sm:pr-6'>
                            MovieNet
                        </span>
                    </Link>

                    <li
                        className='font-medium text-sm md:text-lg text-white hover:font-bold hidden md:block'
                        onClick={() => router.push('/NowPlaying')}
                    >
                        Now Playing
                    </li>

                    <li
                        className='font-medium text-sm md:text-lg text-white hover:font-bold hidden md:block'
                        onClick={() => router.push('/Tv')}
                    >
                        TV-Shows
                    </li>
                    <Link href={`/genre/53?name=Movie`}>
                        <li className='font-medium text-sm md:text-lg text-white hover:font-bold hidden md:block'>
                            Movie
                        </li>
                    </Link>
                </ul>
                <div className={`flex  items-center cursor-pointer gap-2 sm:gap-5'`}>
                    <div>
                        <Search isMobile />
                    </div>
                    <div className='md:hidden' onClick={toggleShowMenu}>
                        {showMenu ? (
                            <RiCloseFill className='text-white text-2xl w-7 h-7 ml-1' />
                        ) : (
                            <RiMenu3Line className='text-white text-2xl ml-1 w-7 h-7' />
                        )}
                    </div>
                    <div className='-mr-4'>
                        {!showMenu && <img src='/tving.png' alt='profile' width={20} height={2} />}
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className='fixed top-12 left-0 z-20'>
                    <Sidebar isMobile={showMenu} />
                </div>
            )}
        </div>
    );
};

export default Header;
