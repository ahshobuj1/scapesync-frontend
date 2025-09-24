// components/Container.tsx
import {ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-0 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
};

export default Container;
