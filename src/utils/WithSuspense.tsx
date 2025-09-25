'use client';
import {Suspense} from 'react';

const WithSuspense = ({children}: {children: React.ReactNode}) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default WithSuspense;
