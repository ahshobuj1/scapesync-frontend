import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import serviceImage1 from '@/assets/images/service/service1.png';
import serviceImage2 from '@/assets/images/service/service2.png';
import serviceImage3 from '@/assets/images/service/service3.png';
import bgImage from '@/assets/images/service/service-image-bg.png';
import BuildEveryoneContent from '../ui/BuildEveryoneContent';
import frameImg from '@/assets/images/icons/frame.png';
import frame3Img from '@/assets/images/icons/frame3.png';
import middleFrame from '@/assets/images/icons/middle-frame.png';
import rightFrame from '@/assets/images/icons/right-frame.png';

const BuildEveryone = () => {
  return (
    <Container>
      <div className="relative">
        <SectionHeading
          heading="Build for Everyone"
          desc="Whether you are booking services, managing tasks, or running
          operations, we have designed the perfect experience for you."
        />

        <Image
          src={frameImg}
          width={240}
          height={11}
          alt="hero phone logo"
          className="bg-cover bg-center absolute top-7 lg:top-11 left-[16%] lg:left-[48%] -z-1 animate-pulse"
        />
        <Image
          src={frame3Img}
          width={221}
          height={124}
          alt="hero phone logo"
          className="bg-cover bg-center absolute top-24 lg:left-20 hidden lg:block animate-pulse"
        />
        <Image
          src={middleFrame}
          width={341}
          height={1253}
          alt="hero phone logo"
          className="bg-cover bg-center absolute top-28 left-0 lg:left-[34%]"
        />
        <Image
          src={rightFrame}
          width={250}
          height={732}
          alt="hero phone logo"
          className="bg-cover bg-center absolute top-24 right-5 lg:-right-24"
        />
      </div>

      <div className="space-y-5 mt-10 lg:mt-24">
        {/* content 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
          {/* Image */}
          <div
            className="bg-cover bg-center lg:order-2"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage1}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain mb-5 lg:mb-0"
            />
          </div>

          {/* Service */}
          <BuildEveryoneContent
            name="Users"
            title="Book services, track progress and stay updated"
            desc="Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience."
            col1="Book services in seconds"
            col2="Track real-time job updates"
            col3="Schedule appointments at your convenience"
          />
        </div>

        {/* content 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
          {/* Image */}
          <div
            className="bg-cover bg-center"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage2}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain mb-5 lg:mb-0"
            />
          </div>

          {/* Service */}
          <BuildEveryoneContent
            name="Business Owners"
            title="Book services, track progress and stay updated"
            desc="Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app."
            col1="Assign jobs to the right team member"
            col2="Monitor performance in real time"
            col3="Manage clients and services seamlessly"
          />
        </div>

        {/* content 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
          {/* Image */}
          <div
            className="bg-cover bg-center lg:order-2"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage3}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain mb-5 lg:mb-0"
            />
          </div>

          {/* Service */}
          <BuildEveryoneContent
            name="Employees"
            title="See tasks, track time, and navigate routes with ease."
            desc="Everything you need to manage your workday from job assignments to optimized routes and time logging."
            col1="Assign jobs to the right team member"
            col2="Monitor performance in real time"
            col3="Manage clients and services seamlessly"
          />
        </div>
      </div>
    </Container>
  );
};

export default BuildEveryone;
