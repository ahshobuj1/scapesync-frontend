import AuthButton from '@/components/ui/AuthButton';
import Container from '@/components/ui/Container';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className=" mt-20">
        <h3>Please check your email!</h3>
        <p>
          We have emailed a 6-digit confirmation code to acb@domain, please
          enter the code in below box to verify your email.
        </p>

        <AuthButton text="Auth Button" />
      </div>
    </Container>
  );
};

export default page;
