'use client';
import {useRouter} from 'next/navigation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '@/assets/logo-scape.png';
import Link from 'next/link';
import groupAuth from '@/assets/images/icons/group-auth.png';

export default function OtpPage() {
  const router = useRouter();

  return (
    <Container>
      {/* Logo */}
      <div>
        <Image
          src={logo}
          height={60}
          width={147}
          alt="logo ScapeSync"
          className="mt-6"
        />
      </div>

      <div className="max-w-[480px] mx-auto flex flex-col">
        {/* Heading */}
        <div>
          <div className="flex justify-center">
            <Image
              src={groupAuth}
              width={332}
              height={328}
              alt="logo ScapeSync"
              className="mb-9"
            />
          </div>
          <h3 className="mb-4">Password Changed Successful</h3>
          <p className="text-center">
            Your account is set up! Just verify your email to get started.
          </p>
        </div>

        <Link href={'/login'}>
          <button className="bg-[#49AE44] py-3 text-white text-base font-bold w-full rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 flex justify-center items-center mt-10">
            Go To Login
          </button>
        </Link>
      </div>
    </Container>
  );
}
