import type { ReactNode } from 'react';
import { TitleComponent } from './Title.style'

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return ( 
    <TitleComponent>
      {children}
    </TitleComponent>
  );
}

export default Title;