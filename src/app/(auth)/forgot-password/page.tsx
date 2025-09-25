'use client';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';
import z from 'zod';
import {forgotPasswordSchema} from '@/schema';
import TextField from '@mui/material/TextField';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {toast} from 'sonner';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '@/assets/logo-scape.png';
import {IoIosArrowBack} from 'react-icons/io';
import Link from 'next/link';

type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    setError,
  } = useForm<forgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // Submit handler
  const onSubmit = async (data: forgotPasswordFormData) => {
    try {
      const formData = new FormData();
      formData.append('email', data.email);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      console.log(res);
      if (res?.status === 201) {
        router.push(`/forgot-password-otp?email=${data.email}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errorMessage = err.response && err.response.data?.message;
      toast.error(errorMessage);

      if (err.response && err.response.data?.message) {
        setError('email', {
          type: 'manual',
          message: err.response.data.message,
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Container>
      <div>
        <Image
          src={logo}
          height={60}
          width={147}
          alt="logo ScapeSync"
          className="bg-cover bg-center mt-6"
        />
      </div>
      <div className="max-w-[480px] mx-auto flex flex-col justify-center items-center min-h-screen">
        <div className="mb-10">
          <Link href={'/login'}>
            <button className="p-1 flex items-center gap-2 mb-6 text-[#49AE44] text-sm font-bold cursor-pointer">
              <IoIosArrowBack /> Back
            </button>
          </Link>
          <h3 className="text-2xl mb-4">Forgot your password?</h3>
          <p>
            Please enter the email address associated with your account, and we
            will email you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Email */}
          <TextField
            {...register('email')}
            label="Email"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              borderColor: '#919EAB52',
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#919EAB52',
                },
              },
              '& label.Mui-focused': {
                color: '#919EAB',
              },
            }}
          />

          {/* Button */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#49AE44] py-3 text-white text-base font-bold w-full rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 flex justify-center items-center">
            {isSubmitting ? (
              <span className="flex gap-2 items-center">
                <AiOutlineLoading3Quarters className="animate-spin" />{' '}
                Loading...
              </span>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
      </div>
    </Container>
  );
}

// 'use client';
// import {useRouter} from 'next/navigation';
// import {useState} from 'react';
// import axios from 'axios';

// export default function ForgotPasswordPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await axios.post('/auth/forgot-password', {email});
//     router.push('/auth/reset-password?email=' + email);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
//       <h2 className="text-xl">Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="border p-2 w-full"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button className="bg-red-600 text-white px-4 py-2 rounded">
//         Send Reset Link / OTP
//       </button>
//     </form>
//   );
// }
