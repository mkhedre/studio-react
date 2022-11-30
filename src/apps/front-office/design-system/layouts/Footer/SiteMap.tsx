import { NavLink } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import { Container, Flex } from '../../components/Containers';
import { SiteMapElement } from './style';

const SiteMap = () => {
  return (
    <SiteMapElement>
      <Container>
        <Flex width="100%" alignItems="center">
          <NavLink component={Link} to="/about-us" label={trans('aboutUs')} />
          <NavLink
            component={Link}
            to="/conditions-page"
            label={trans('conditionsPage')}
          />
          <NavLink component={Link} to="/privacy" label={trans('privacy')} />
          <NavLink
            component={Link}
            to="/contact-us"
            label={trans('contactUS')}
          />
        </Flex>
      </Container>
    </SiteMapElement>
  );
};

export default SiteMap;
