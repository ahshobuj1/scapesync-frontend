import Image from 'next/image';
import Container from '../ui/Container';
import icon1 from '@/assets/images/icons/appointment-icon.png';

const Features = () => {
  return (
    <Container>
      <div className="flex items-center justify-center mt-20">
        <div>
          <div className="h-11 w-11 rounded-xl bg-[#ECFCEB] flex items-center justify-center">
            <Image
              src={icon1}
              height={24}
              width={24}
              alt="logo ScapeSync"
              className="bg-cover"
            />
          </div>

          <h4 className="text-lg font-bold mt-5 mb-1">Easy Service Booking</h4>
          <p className="text-sm">
            Streamlined booking process for clients with service catalogs and
            availability.
          </p>
        </div>

        <div className="border-[1px] w-0 h-44 text-[#F4F6F8] mx-9"></div>
        <div>
          <div className="h-11 w-11 rounded-xl bg-green-200"></div>

          <h4 className="text-lg font-bold mt-5 mb-1">Easy Service Booking</h4>
          <p className="text-sm">
            Streamlined booking process for clients with service catalogs and
            availability.
          </p>
        </div>

        <div className="border-[1px] w-0 h-44 text-[#F4F6F8] mx-9"></div>
        <div>
          <div className="h-11 w-11 rounded-xl bg-green-200"></div>

          <h4 className="text-lg font-bold mt-5 mb-1">Easy Service Booking</h4>
          <p className="text-sm">
            Streamlined booking process for clients with service catalogs and
            availability.
          </p>
        </div>

        <div className="border-[1px] w-0 h-44 text-[#F4F6F8] mx-9"></div>
        <div>
          <div className="h-11 w-11 rounded-xl bg-green-200"></div>

          <h4 className="text-lg font-bold mt-5 mb-1">Easy Service Booking</h4>
          <p className="text-sm">
            Streamlined booking process for clients with service catalogs and
            availability.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
