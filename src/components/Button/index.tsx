import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...rest }: ButtonProps) {
  return <Container className={isOutlined ? 'outlined' : ''} {...rest} />;
}
