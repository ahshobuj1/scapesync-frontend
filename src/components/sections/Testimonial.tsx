import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import bgElapse from '@/assets/bg-elapse-testimonial.png';
import user1 from '@/assets/images/user/user1.png';
import user2 from '@/assets/images/user/user2.png';
import user3 from '@/assets/images/user/user3.png';
import TestimonialUserCard from '../ui/TestimonialUserCard';

const Testimonial = () => {
  return (
    <div>
      <SectionHeading
        heading="What Our Users Are Saying"
        desc="Real stories from clients, employees, and business owners who use our app."
      />

      <div
        className="bg-cover bg-center mt-14"
        style={{backgroundImage: `url(${bgElapse.src})`}}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 justify-between items-center">
          {/* Users card */}
          <TestimonialUserCard
            img={user1}
            name="Farzana H."
            profession="Owner, CleanPro Services"
            desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
          />
          <TestimonialUserCard
            img={user1}
            name="Farzana H."
            profession="Owner, CleanPro Services"
            desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
          />
          <TestimonialUserCard
            img={user1}
            name="Farzana H."
            profession="Owner, CleanPro Services"
            desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
