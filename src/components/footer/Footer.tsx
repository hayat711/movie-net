import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

type Props = {};

function Footer({}: Props) {
    return (
        <div className='py-24 bg-black'>
            <div className='bg-black flex px-6 justify-between font-bold'>
                <div className='flex justify-between  text-gray-400  gap-8'>
                    <h5 className='hover:text-white cursor-pointer'>공지사항</h5>
                    <a href='/help'>
                        <h5 className='hover:text-white'>[안내] 개인정보처리방침 개정 안내 (2023년 1월 2일)</h5>
                    </a>
                </div>

                <div className='flex justify-between  text-gray-300 gap-8 cursor-pointer'>
                    <h5 className='hover:text-white'>브랜드 바라보기 + </h5>
                    <h5 className='hover:text-white'>그롭 계열사 바라보기 + </h5>
                </div>
            </div>
            <div className='border-t-2 px-6 mt-4 border-gray-600'></div>
            <ul className='flex justify-start gap-5 text-gray-400 mt-6 cursor-pointer'>
                <li className='hover:text-white'>고객선터</li>
                <li className='hover:text-white'>이용약관</li>
                <li className='hover:text-white'>개인정보처리방법</li>
                <li className='hover:text-white'>청소년보호정책</li>
                <li className='hover:text-white'>법적고지</li>
                <li className='hover:text-white'>이밴트</li>
                <li className='hover:text-white'>인재채용</li>
            </ul>

            <div className='p-4 pr-20 mt-8'>
                <p className='text-gray-400 select-none '>
                    TVING은 2010년 5월 CJ헬로비전에서 출시되었다. 대부분의 OTT 서비스처럼 유료로 운영되었으며 가장 많이
                    이용하는 베이직팩 이용권의 경우 대한민국과 해외 지상파 및 케이블 방송, IPTV 채널들을 실시간으로
                    방송했으며 채널 별 이용권과 영화 및 VOD를 판매하였다. 케이블 의무전송채널과 종합편성채널은 무료로
                    제공했다. 2012년 7월 유료화를 단행한 경쟁 서비스 POOQ을 제공 채널 수와 VOD 보유량에서 압도했었다.
                    PC뿐만 아니라 아이폰/아이패드, 안드로이드폰과 태블릿PC에서도 시청이 가능했다. 다만 안드로이드
                    애플리케이션 출시 초창기에는 wvga 이상의 해상도를 가진 기기만 지원했기 때문에 HVGA나 QVGA폰은 서비스
                    되지 않았었으며 2015년부터 일부 콘텐츠에 한하여 FULL HD 화질까지 서비스했다. 서비스 초기에는
                    그래택과 CJ헬로비전이 협력하여 곰플레이어와 연동된 형태로 서비스를 제공하였으나, 2011년 3월부터는
                    그래텍이 손을 떼고 CJ헬로비전 단독으로 운영하면서 로고를 바꾸고 본격적인 N스크린 서비스로 발전했다.
                    분리 초창기에는 ActiveX를 사용했으나, 사이트 개편을 통해 OS와 웹 브라우저 종류에 상관 없이 시청할 수
                    있게 되었다.
                </p>
            </div>

            <ul className='flex  justify-center items-center gap-5'>
                <li className=' rounded-full bg-red-400'>
                    <BsYoutube size={50}/>
                </li>
                <li className=' rounded-full bg-red-400'>
                    <BsFacebook size={50}/>
                </li>
                <li className=' rounded-full bg-red-400'>
                    <AiFillTwitterCircle size={50}/>
                </li>
                <li className=' rounded-full bg-red-400'>
                    <AiFillInstagram size={50}/>
                </li>
            </ul>
            <h5 className='text-gray-500 my-12'>Copyright ©️ 주식화 티빙 All right reserved.</h5>
        </div>
    );
}

export default Footer;
