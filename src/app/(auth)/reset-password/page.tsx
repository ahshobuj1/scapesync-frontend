'use client';
import {useRouter, useSearchParams} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';
import z from 'zod';
import {resetPasswordSchema} from '@/schema';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {useState} from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {toast} from 'sonner';
import Container from '@mui/material/Container';
import Image from 'next/image';
import logo from '@/assets/logo-scape.png';
import WithSuspense from '@/utils/WithSuspense';

type resetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    setError,
  } = useForm<resetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  //  Submit handler
  const onSubmit = async (data: resetPasswordFormData) => {
    try {
      const formData = new FormData();
      formData.append('password', data.password);
      formData.append('password_confirmation', data.password_confirmation);
      formData.append('token', token || '');

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        }
      );

      console.log('res', res);

      if (res?.data?.status === 200) {
        toast.success(res?.data?.message);
        router.push('/password-changed');
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response?.data?.message) {
        const message = err.response?.data?.message;
        toast.error(message);

        setError('password', {
          type: 'manual',
          message: err.response.data.message,
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <WithSuspense>
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
          <div className="flex flex-col justify-center items-center mb-6">
            <h3 className="text-2xl mb-2">Enter Your Password</h3>
            <p>
              Please enter the email address associated with your account, and
              we will email you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Password */}
            <TextField
              {...register('password')}
              label="New Password"
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
                'Change Password'
              )}
            </button>
          </form>
        </div>
      </Container>
    </WithSuspense>
  );
}
