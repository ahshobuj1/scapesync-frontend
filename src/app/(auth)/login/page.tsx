'use client';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';
import z from 'zod';
import {loginSchema} from '@/schema';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {useState} from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {toast} from 'sonner';
import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '@/assets/logo-scape.png';

type LoginFormData = z.infer<typeof loginSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Submit handler
  const onSubmit = async (data: LoginFormData) => {
    try {
      const formData = new FormData();

      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('terms', String(data.terms || false));

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      console.log('res', res);

      if (res?.status === 200) {
        toast.success(res?.data?.message);

        localStorage.setItem('token', res.data.token);
        router.push('/');
      }

      // router.push('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errorMessage = err.response && err.response.data?.message;
      toast.error(`${errorMessage} Enter correct email and password!`);
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
        <div className="flex flex-col justify-center items-center mb-6 mt-5 lg:mt-0">
          <h3 className="text-2xl mb-2">Welcome to ScapeSync</h3>
          <p className="text-center md:text-start">
            Please share your login details so you can access the website.
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

          {/* Password */}
          <TextField
            {...register('password')}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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

          <div className="flex justify-between items-center">
            {/* Remember Me */}
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('terms')}
                    sx={{
                      color: '#49AE44',
                      '&.Mui-checked': {
                        color: '#49AE44',
                      },
                    }}
                  />
                }
                label="Remember me"
              />
            </div>

            <div>
              <Link
                className="text-[#49AE44] font-semibold text-sm"
                href={'/forgot-password'}>
                Forgot Password?
              </Link>
            </div>
          </div>
          {/* Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[#49AE44] py-3 text-white text-base font-bold w-full rounded-lg cursor-pointer shadow-[0_8px_16px_0_#39A4323D] hover:scale-105 transition-all duration-300 flex justify-center items-center">
            {isSubmitting ? (
              <span className="flex gap-2 items-center">
                <AiOutlineLoading3Quarters className="animate-spin" />{' '}
                Loading...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div>
          <div className="mt-12 mb-6 flex justify-between items-center">
            <div className="border-[1px] border-[#919EAB3D] min-w-36 lg:min-w-[232px] h-[1px]"></div>
            <p className="px-2">OR</p>
            <div className="border-[1px] border-[#919EAB3D] min-w-36 lg:min-w-[232px] h-[1px]"></div>
          </div>

          <div>
            <button className="py-3 text-base font-bold w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2 text-[#637381] border-[1px] border-[#919EAB52] mb-8 ">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>

            <h5 className="text-sm font-normal text-center mb-20">
              Don not have an account?{' '}
              <Link href="/register" className="text-[#49AE44] font-semibold">
                Get started
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
