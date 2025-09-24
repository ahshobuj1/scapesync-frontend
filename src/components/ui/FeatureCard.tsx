interface IFeatureCardProps {
  icon: string;
  heading: string;
  desc: string;
}

const FeatureCard = ({icon, heading, desc}: IFeatureCardProps) => {
  return (
    <div>
      <div className="h-11 w-11 rounded-xl bg-[#ECFCEB]"></div>

      <h4 className="text-lg font-bold mt-5 mb-1">Easy Service Booking</h4>
      <p className="text-sm">
        Streamlined booking process for clients with service catalogs and
        availability.
      </p>
    </div>
  );
};

export default FeatureCard;
