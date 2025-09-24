import footerLogo from '@/assets/images/footer/footer-logo.png';
import footerBg from '@/assets/images/footer/footer-bg.png';
import Image from 'next/image';
import appStore from '@/assets/images/footer/footer-app.png';
import playStore from '@/assets/images/footer/footer-play.png';
import Container from '../ui/Container';
import icon1 from '@/assets/images/icons/icon1.png';
import icon2 from '@/assets/images/icons/icon2.png';
import icon3 from '@/assets/images/icons/icon3.png';
import icon4 from '@/assets/images/icons/icon4.png';

const Footer = () => {
  return (
    <div className="bg-[#0F3B34]">
      <div
        className="bg-cover bg-center"
        style={{backgroundImage: `url(${footerBg.src})`}}>
        <Container>
          <div className="pt-24">
            <div className="grid grid-cols-3 items-center justify-between mb-24">
              <Image
                src={footerLogo}
                height={60}
                width={147}
                alt="logo ScapeSync"
                className="bg-cover"
              />

              <div>
                <p className="text-base font-medium text-[#CFD8D6]">
                  Your all-in-one platform for job scheduling, employee
                  management, and client service built to keep your business
                  running smoothly from anywhere.
                </p>
              </div>

              <div className="flex gap-[18px] justify-end">
                <Image src={appStore} height={50} width={140} alt="appStore" />
                <Image
                  src={playStore}
                  height={50}
                  width={140}
                  alt="playStore"
                />
              </div>
            </div>

            <div className="flex gap-8 mb-14">
              <Image
                src={icon4}
                height={24}
                width={24}
                alt="social icon"
                className="bg-cover"
              />
              <Image
                src={icon3}
                height={24}
                width={24}
                alt="social icon"
                className="bg-cover"
              />
              <Image
                src={icon2}
                height={24}
                width={24}
                alt="social icon"
                className="bg-cover"
              />
              <Image
                src={icon1}
                height={24}
                width={24}
                alt="social icon"
                className="bg-cover"
              />
            </div>
          </div>
        </Container>

        <div className="border-t-[1px] border-[#637381] h-[21px]">
          <Container>
            <p className="text-sm font-normal text-[#637381]">
              © 2021-2025, ScapeSync. All Rights Reserved.
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
