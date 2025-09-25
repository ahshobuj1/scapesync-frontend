interface IProps {
  heading: string;
  desc: string;
}

const SectionHeading = ({heading, desc}: IProps) => {
  return (
    <div className="flex flex-col items-center mt-12 lg:mt-[170px]">
      <h2 className="font-bold text-2xl lg:text-5xl">{heading}</h2>
      <p className="text-sm max-w-[550px] mt-1 lg:mt-3 text-center px-2">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeading;
