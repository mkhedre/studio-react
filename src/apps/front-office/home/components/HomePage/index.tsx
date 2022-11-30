import EasyOrder from './EasyOrder';
import WhyUs from './WhyUs';

const offices = [
  {
    // logo:,
    name: 'office1',
    category: 'engineering',
    rating: 4,
    address: '',
  },
];

export default function HomePage() {
  return (
    <>
      <EasyOrder />
      <WhyUs />
    </>
  );
}
