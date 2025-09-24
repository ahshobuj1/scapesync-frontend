import Image from 'next/image';
import Container from '../ui/Container';
import logo from '@/assets/logo-scape.png';
import heroPhone from '@/assets/images/hero/hero-phone.png';
import appStore from '@/assets/images/hero/app-store.png';
import playStore from '@/assets/images/hero/play-store.png';

const HeroSection = () => {
  return (
    <div>
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

            <button>Get Started</button>
          </div>

          {/* Hero */}

          <div className="grid grid-cols-2 justify-between items-center">
            <div className="max-w-[655px]">
              <h2>All Your Jobs One Smart App</h2>
              <p>
                Built for business owners, employees, and clients streamline job
                scheduling, service tracking, and team management in one
                powerful app.
              </p>

              <div className="mt-16 flex gap-[18px]">
                <Image
                  src={playStore}
                  height={50}
                  width={140}
                  alt="playStore"
                />

                <Image src={appStore} height={50} width={140} alt="appStore" />
              </div>
            </div>

            <div>
              <Image
                src={heroPhone}
                height={656}
                width={720}
                alt="hero phone logo"
                className="bg-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
