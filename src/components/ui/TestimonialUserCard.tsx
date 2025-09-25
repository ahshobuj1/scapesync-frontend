import Image, {StaticImageData} from 'next/image';
import userCardBg from '@/assets/images/user/user-card-icon.png';

interface IProps {
  img: string | StaticImageData;
  name: string;
  profession: string;
  desc: string;
}

const TestimonialUserCard = ({img, name, profession, desc}: IProps) => {
  return (
    <div>
      <div className="p-3 md:p-7 max-w-[387px] relative bg-white rounded-[22px] shadow-[0_16px_32px_-4px_#92AB911A] hover:shadow-[#ECFCEB] hover:shadow-lg transition-all duration-300 hover:transform hover:scale-101 duration-300 transition-all cursor-pointer">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[14px] mb-6">
          <Image
            src={img}
            height={48}
            width={48}
            alt="user image"
            className="bg-cover rounded-full"
          />

          <div className="text-center">
            <h4 className="font-bold text-base">{name}</h4>
            <p className="text-xs lg:text-sm">{profession}</p>
          </div>
        </div>

        <p>{desc}</p>

        <Image
          src={userCardBg}
          width={64}
          height={52}
          alt="user image"
          className="bg-cover bg-center rounded-full absolute left-4 top-20 -z-1"
        />
      </div>
    </div>
  );
};

export default TestimonialUserCard;
