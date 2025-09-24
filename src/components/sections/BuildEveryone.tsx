import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import serviceImage1 from '@/assets/images/service/service1.png';
import serviceImage2 from '@/assets/images/service/service2.png';
import serviceImage3 from '@/assets/images/service/service3.png';
import bgImage from '@/assets/images/service/service-image-bg.png';
import BuildEveryoneContent from '../ui/BuildEveryoneContent';

const BuildEveryone = () => {
  return (
    <Container>
      <SectionHeading
        heading="Build for Everyone"
        desc="Whether you are booking services, managing tasks, or running
          operations, we have designed the perfect experience for you."
      />

      <div className="space-y-5 mt-20">
        {/* content 1 */}
        <div className="grid grid-cols-2 justify-between items-center">
          {/* Service */}
          <BuildEveryoneContent
            name="Users"
            title="Book services, track progress and stay updated"
            desc="Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience."
            col1="Book services in seconds"
            col2="Book services in seconds"
            col3="Book services in seconds"
          />

          {/* Image */}
          <div
            className="bg-cover bg-center"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage1}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain"
            />
          </div>
        </div>

        {/* content 2 */}
        <div className="grid grid-cols-2 justify-between items-center">
          {/* Image */}
          <div
            className="bg-cover bg-center"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage2}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain"
            />
          </div>

          {/* Service */}
          <BuildEveryoneContent
            name="Users"
            title="Book services, track progress and stay updated"
            desc="Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience."
            col1="Book services in seconds"
            col2="Book services in seconds"
            col3="Book services in seconds"
          />
        </div>

        {/* content 3 */}
        <div className="grid grid-cols-2 justify-between items-center">
          {/* Service */}
          <BuildEveryoneContent
            name="Users"
            title="Book services, track progress and stay updated"
            desc="Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience."
            col1="Book services in seconds"
            col2="Book services in seconds"
            col3="Book services in seconds"
          />

          {/* Image */}
          <div
            className="bg-cover bg-center"
            style={{backgroundImage: `url(${bgImage.src})`}}>
            <Image
              src={serviceImage3}
              height={516}
              width={610}
              alt="service phone logo"
              className="bg-contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BuildEveryone;
