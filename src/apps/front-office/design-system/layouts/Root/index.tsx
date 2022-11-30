import { MantineProvider } from '@mantine/core';
import { current } from '@mongez/react';
import { BasicComponentProps } from '@mongez/react-router';
import { Container } from '../../components/Containers';

export default function Root({ children }: BasicComponentProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: current('localeCode') === 'ar' ? 'Neo Sans W23' : undefined,
        dir: current('localeCode') === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <Container containerWidth="fullScreen">{children}</Container>
    </MantineProvider>
  );
}
