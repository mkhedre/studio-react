import { useMediaQuery } from '@mantine/hooks';

export default function useBreakpoints() {
  const largeScreenSize = useMediaQuery('(min-width: 1441px)');
  const mediumScreenSize = useMediaQuery(
    '(min-width: 1367px) and (max-width: 1440px)'
  );
  const laptopSize = useMediaQuery('(max-width: 1366px)');
  const miniLaptopSize = useMediaQuery('(max-width: 1281px)');
  const ipadSize = useMediaQuery('(max-width: 1024px)');
  const tabletSize = useMediaQuery('(max-width: 768px)');
  const largeMobileScreenSize = useMediaQuery('(max-width: 560px)');
  const smallMobileScreenSize = useMediaQuery('(max-width: 360px)');
  return {
    largescreen: largeScreenSize,
    mediumScreen: mediumScreenSize,
    laptopScreen: laptopSize,
    miniLaptopScreen: miniLaptopSize,
    ipadScreen: ipadSize,
    tabletScreen: tabletSize,
    largeMobileScreen: largeMobileScreenSize,
    smallMobileScreen: smallMobileScreenSize,
  };
}
