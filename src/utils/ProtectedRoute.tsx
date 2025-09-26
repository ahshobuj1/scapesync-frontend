'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Simulate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    const authTimer = setTimeout(() => {
      if (!token) {
        setProgress(100);
        setTimeout(() => router.push('/login'), 500);
      } else {
        setProgress(100);
        setTimeout(() => setLoading(false), 500);
      }
      clearInterval(progressInterval);
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(authTimer);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        {/* Main Loading Container */}
        <div className="text-center max-w-md mx-auto">
          {/* Animated Logo/Icon */}
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              {/* Outer Ring Animation */}
              <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-ping"></div>
              {/* Main Icon */}
              <div className="absolute inset-2 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Checking authentication...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{width: `${progress}%`}}></div>
            </div>
          </div>

          {/* Loading Text with Animation */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Securing Your Access
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are verifying your credentials to ensure secure access to your
              dashboard.
            </p>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-1 mt-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
              style={{animationDelay: '0.1s'}}></div>
            <div
              className="w-2 h-2 bg-green-600 rounded-full animate-bounce"
              style={{animationDelay: '0.2s'}}></div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-green-700">
              Secure Connection
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="absolute bottom-8 text-center">
          <p className="text-xs text-gray-400">
            This may take a few seconds. Please don not close this window.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
