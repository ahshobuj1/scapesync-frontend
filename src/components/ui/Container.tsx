// components/Container.tsx
import {ReactNode} from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-4 lg:px-0`}>{children}</div>
  );
};

export default Container;
