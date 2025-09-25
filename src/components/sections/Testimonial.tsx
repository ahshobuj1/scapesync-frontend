import SectionHeading from '../ui/SectionHeading';
import bgElapse from '@/assets/bg-elapse-testimonial.png';
import user1 from '@/assets/images/user/user1.png';
import user2 from '@/assets/images/user/user2.png';
import user3 from '@/assets/images/user/user3.png';
import TestimonialUserCard from '../ui/TestimonialUserCard';
import Container from '@mui/material/Container';

const Testimonial = () => {
  return (
    <div>
      <SectionHeading
        heading="What Our Users Are Saying"
        desc="Real stories from clients, employees, and business owners who use our app."
      />

      <div
        className="bg-cover bg-center mt-12 lg:mt-14"
        style={{backgroundImage: `url(${bgElapse.src})`}}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center lg:justify-between items-center ">
            {/* Users card */}

            <TestimonialUserCard
              img={user1}
              name="Farzana H."
              profession="Owner, CleanPro Services"
              desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
            />

            <TestimonialUserCard
              img={user2}
              name="Ahmed R."
              profession="Owner, CleanPro Services"
              desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
            />
            <TestimonialUserCard
              img={user3}
              name="Farzana H."
              profession="Owner, CleanPro Services"
              desc="This app completely changed the way we manage our team. Assigning
              jobs takes minutes, and we never miss an update."
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
