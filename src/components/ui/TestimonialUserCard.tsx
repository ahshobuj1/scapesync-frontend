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
      <div className="p-7 max-w-[387px] relative bg-white rounded-[22px] shadow-[0_16px_32px_-4px_#92AB911A]">
        <div className="flex items-center gap-[14px] mb-6">
          <Image
            src={img}
            height={48}
            width={48}
            alt="user image"
            className="bg-cover rounded-full"
          />

          <div>
            <h4 className="font-bold text-base">{name}</h4>
            <span className="text-sm">{profession}</span>
          </div>
        </div>

        <p>{desc}</p>

        <Image
          src={userCardBg}
          width={64}
          height={52}
          alt="user image"
          className="bg-cover rounded-full absolute left-4 top-20 -z-1"
        />
      </div>
    </div>
  );
};

export default TestimonialUserCard;
