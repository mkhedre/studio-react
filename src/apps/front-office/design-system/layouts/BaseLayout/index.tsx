import { BasicComponentProps } from '@mongez/react-router';
import Footer from '../Footer';
import Header from '../Header';

export default function BaseLayout({ children }: BasicComponentProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
