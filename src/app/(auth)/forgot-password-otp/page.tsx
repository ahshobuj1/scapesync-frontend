'use client';

import {useRouter} from 'next/navigation';
import {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import logo from '@/assets/logo-scape.png';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {toast} from 'sonner';
import {IoIosArrowBack} from 'react-icons/io';
import Link from 'next/link';

export default function OtpPage() {
  const [email, setEmail] = useState<string | null>(null);
  // const [otpFromQuery, setOtpFromQuery] = useState<string | null>(null);

  const router = useRouter();
  // const searchParams = useSearchParams();
  // const email = searchParams.get('email');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // const otpFromParams = params.get('otp');
    // setOtpFromQuery(otpFromParams);

    const emailFromQuery = params.get('email');
    if (!emailFromQuery) {
      router.push('/forgot-password');
    } else {
      setEmail(emailFromQuery);
    }
  }, [router]);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for auto-focus
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    // Only digits allowed
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.some((digit) => digit === '')) {
      toast.error('Please fill all OTP fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('email', email || '');
      formData.append('otp', otp.join(''));

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgot-verify-otp`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      console.log('[res]', res);

      if (res?.status === 201) {
        toast.success(res?.data?.message);
        router.push(`/reset-password?token=${res?.data?.data?.token}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'OTP verification failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email || '');

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resend_otp`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      if (res?.status === 201) {
        toast.success(res?.data?.message);
      }

      console.log(res, 'resend');
    } catch {
      toast.error('Failed to resend OTP');
    }
  };

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

      <div className="max-w-[480px] mx-auto flex flex-col justify-center items-center min-h-screen">
        {/* Heading */}
        <div className="mb-6">
          <Link href={'/forgot-password'}>
            <button className="p-1 flex items-center gap-2 mb-6 text-[#49AE44] text-sm font-bold cursor-pointer">
              <IoIosArrowBack /> Back
            </button>
          </Link>

          {/* <p>
            <span className="font-bold">{otpFromQuery}</span> : OTP for demo
            only. In production, it would be sent via email. Backend team needs
            to fix email sending.
          </p> */}

          <h3 className="mb-2 text-start">Please check your email!</h3>
          <p>
            We have emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* OTP inputs */}
          <div className="flex justify-between gap-2 mx-auto mt-4 md:mt-10 mb-0 md:mb-6">
            {otp.map((digit, idx) => (
              <TextField
                key={idx}
                inputRef={(el) => (inputRefs.current[idx] = el)}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                inputProps={{maxLength: 1, className: 'text-center text-xl'}}
                sx={{
                  width: {
                    xs: '44px',
                    md: '56px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#919EAB52',
                    },
                  },
                }}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            className="bg-[#49AE44] py-3 text-white text-base font-bold w-full rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 flex justify-center items-center">
            {isSubmitting ? (
              <span className="flex gap-2 items-center">
                <AiOutlineLoading3Quarters className="animate-spin" />{' '}
                Verifying...
              </span>
            ) : (
              'Verify OTP'
            )}
          </button>

          {/* Resend */}

          <h5 className="text-center mx-auto">
            Don not have a code?{' '}
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-[#49AE44] cursor-pointer">
              Resend OTP
            </button>
          </h5>
        </form>
      </div>
    </Container>
  );
}
