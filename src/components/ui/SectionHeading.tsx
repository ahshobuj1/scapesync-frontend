interface IProps {
  heading: string;
  desc: string;
}

const SectionHeading = ({heading, desc}: IProps) => {
  return (
    <div className="flex flex-col items-center mt-[170px]">
      <h2 className="font-bold text-5xl">{heading}</h2>
      <p className="text-sm max-w-[550px] mt-3 text-center">{desc}</p>
    </div>
  );
};

export default SectionHeading;
