import Image from 'next/image';
import Container from '../ui/Container';
import icon1 from '@/assets/images/icons/appointment-icon.png';
import gpsIcon from '@/assets/images/icons/gps.png';
import shieldIcon from '@/assets/images/icons/shield-icon.png';
import vectorIcon from '@/assets/images/icons/chart-average.png';

const Features = () => {
  const features = [
    {
      icon: icon1,
      title: 'Easy Service Booking',
      description:
        'Streamlined booking process for clients with service catalogs and availability.',
    },
    {
      icon: gpsIcon,
      title: 'Real-time GPS Tracking',
      description:
        'Track service providers in real-time with accurate location updates.',
    },
    {
      icon: vectorIcon,
      title: 'Performance Analytics',
      description:
        'Comprehensive analytics and reporting for business insights.',
    },
    {
      icon: shieldIcon,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security to protect your data and transactions.',
    },
  ];

  return (
    <Container>
      <div className="py-16 lg:py-24">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#212B36] mb-4">
            Why Choose ScapeSync?
          </h2>
          <p className="text-gray-600 max-w-lg lg:max-w-2xl mx-auto text-base md:text-lg">
            Powerful features designed to streamline your business operations
            and enhance customer experience
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Feature Card */}
              <div className="text-left h-full flex flex-col items-start p-2 lg:p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-101">
                {/* Icon Container */}
                <div className="h-14 w-14 lg:h-12 lg:w-12 rounded-xl bg-[#ECFCEB] flex items-center justify-center mb-4 lg:mb-6">
                  <Image
                    src={feature.icon}
                    height={24}
                    width={24}
                    alt={feature.title}
                    className="w-6 h-6 lg:w-5 lg:h-5"
                  />
                </div>

                {/* Content */}
                <h4 className="text-lg lg:text-base xl:text-lg font-bold text-[#212B36] mb-2 lg:mb-3 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-sm lg:text-xs xl:text-sm text-gray-600 leading-relaxed lg:leading-normal">
                  {feature.description}
                </p>
              </div>

              {index < features.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-32 bg-gray-200"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
