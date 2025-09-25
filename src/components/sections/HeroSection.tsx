import Image from 'next/image';
import Container from '../ui/Container';
import logo from '@/assets/logo-scape.png';
import heroPhone from '@/assets/images/hero/hero-phone.png';
import appStore from '@/assets/images/hero/app-store.png';
import playStore from '@/assets/images/hero/play-store.png';
import bgEllipse from '@/assets/images/hero/ellipse-hero.png';
import bgMobileImage from '@/assets/images/service/service-image-bg.png';
import vectorKingImg from '@/assets/images/icons/vector2.png';
import frameImg from '@/assets/images/icons/frame.png';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${bgEllipse.src})`}}>
      <Container>
        <div>
          {/* Navbar */}
          <div className="flex justify-between h-[100px] items-center">
            <Image
              src={logo}
              height={60}
              width={147}
              alt="logo ScapeSync"
              className="bg-cover"
            />

            <button className="bg-[#3BA334] rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 py-[10px] px-[26px] text-white text-base font-bold">
              Get Started
            </button>
          </div>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-between items-center">
            <div className="max-w-2xl md:max-w-xl lg:max-w-[655px] relative mt-28 md:mt-16 lg:mt-0">
              <Image
                src={vectorKingImg}
                width={130}
                height={134}
                alt="hero phone logo"
                className="bg-cover bg-center absolute -top-16 left-[130px] lg:left-[210px] animate-pulse"
              />
              <Image
                src={frameImg}
                width={240}
                height={11}
                alt="hero phone logo"
                className="bg-cover bg-center absolute top-24 lg:top-34 left-[80px] lg:left-[220px] -z-1 animate-pulse"
              />
              <h2 className="text-5xl text-center lg:text-start lg:text-7xl font-bold text-[#212B36] mb-4">
                All Your Jobs One Smart App
              </h2>
              <p className="text-center lg:text-start">
                Built for business owners, employees, and clients streamline job
                scheduling, service tracking, and team management in one
                powerful app.
              </p>

              <div className="mt-12 lg:mt-16 flex justify-center lg:justify-start gap-[18px]">
                <Image
                  src={playStore}
                  height={50}
                  width={140}
                  alt="playStore"
                />

                <Image src={appStore} height={50} width={140} alt="appStore" />
              </div>
            </div>

            <div
              className="bg-cover bg-center lg:order-2"
              style={{backgroundImage: `url(${bgMobileImage.src})`}}>
              <Image
                src={heroPhone}
                height={656}
                width={720}
                alt="hero phone logo"
                className="bg-cover bg-center lg:mb-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
