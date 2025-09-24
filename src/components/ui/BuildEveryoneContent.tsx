import bgImage from '@/assets/images/service/service-image-bg.png';

interface IProps {
  name: string;
  title: string;
  desc: string;
  col1: string;
  col2: string;
  col3: string;
}

const BuildEveryoneContent = ({
  name,
  title,
  desc,
  col1,
  col2,
  col3,
}: IProps) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${bgImage.src})`}}>
      <span className="px-5 py-1.5 border-2 rounded-[60px] border-[#3BA334] text-sm font-semibold text-[#3BA334]">
        {name}
      </span>

      <h4 className="my-4">{title}</h4>
      <p className="mb-6">{desc}</p>

      <div className="space-y-4">
        <div className="flex items-center">
          <span className="border-[3px] border-[#3BA334] mr-6 h-7"></span>
          <h6 className="text-lg font-medium">{col1}</h6>
        </div>

        <div className="flex items-center">
          <span className="border-[3px] border-[#3BA334B2] mr-6 h-7"></span>
          <h6 className="text-lg font-medium">{col2}</h6>
        </div>

        <div className="flex items-center">
          <span className="border-[3px] border-[#3BA33466] mr-6 h-7"></span>
          <h6 className="text-lg font-medium">{col3}</h6>
        </div>
      </div>
    </div>
  );
};

export default BuildEveryoneContent;
