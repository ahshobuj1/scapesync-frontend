'use client';

import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';
import z from 'zod';
import {registerSchema} from '@/schema';
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

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // Submit handler
  const onSubmit = async (data: RegisterFormData) => {
    console.log('[data]', data);
    try {
      const formData = new FormData();
      formData.append('first_name', data.first_name);
      formData.append('last_name', data.last_name);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('password_confirmation', data.password_confirmation);
      formData.append('terms', String(data.terms || false));

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      // console.log('[res]', res);
      if (res?.status === 201) {
        router.push(`/otp?email=${res.data.data.email}`);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
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
      <div className="max-w-[480px] mx-auto mt-5 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mb-6">
          <h3 className="text-2xl mb-2">Create your Account</h3>
          <p>When sports Meets smart Tech.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* First + Last Name */}
          <div className="flex gap-4 justify-between">
            <TextField
              {...register('first_name')}
              label="First Name"
              fullWidth
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              sx={{
                minWidth: '232px',
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
            <TextField
              {...register('last_name')}
              label="Last Name"
              fullWidth
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              sx={{
                minWidth: '232px',
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
          </div>
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

          {/* Confirm Password */}
          <TextField
            {...register('password_confirmation')}
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            fullWidth
            error={!!errors.password_confirmation}
            helperText={errors.password_confirmation?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
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

          {/* Remember Me */}
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
            label="I agree to Tech Takes Terms of Service  and Privacy Policy."
          />

          {/* Button */}
          <button
            disabled={isSubmitting}
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
            <div className="border-[1px] border-[#919EAB3D] min-w-[232px] h-[1px]"></div>
            <p className="px-2">OR</p>
            <div className="border-[1px] border-[#919EAB3D] min-w-[232px] h-[1px]"></div>
          </div>

          <div>
            <button className="py-3 text-base font-bold w-full rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2 text-[#637381] border-[1px] border-[#919EAB52] mb-8 ">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>

            <h5 className="text-sm font-normal text-center mb-20">
              Already have an account?{' '}
              <Link href="/login" className="text-[#49AE44] font-semibold">
                Get started
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
