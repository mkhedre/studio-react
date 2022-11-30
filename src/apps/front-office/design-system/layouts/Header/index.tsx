import { createStyles, NavLink } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link, queryString } from '@mongez/react-router';
import { IconMenu2 } from '@tabler/icons';
import Icons from 'shared/assets/svgs';
import LogoIcon from 'shared/assets/svgs/logo/LogoIcon';
import colors from 'shared/constants/colors';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { Container, Flex } from '../../components/Containers';

import { SMIcon } from 'design-system/layouts/Header/style';

import { useState } from 'react';
import { HeaderElement, HeaderIconButton, Nav } from './style';
interface HeaderProps {
  type?: 'default' | 'home';
}
const useStyles = createStyles((theme) => ({
  root: {
    padding: '0',
    paddingRight: '10px',
  },
  body: {
    width: '50px',
  },
  label: {
    fontSize: '18px',
  },
  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },
  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function Header({ type = 'default' }: HeaderProps) {
  const [openDrawer, setOpenDrawer] = useState<Boolean>(
    ['login', 'register'].includes(queryString().get('open'))
  );
  const { classes } = useStyles();
  const isHomePage: boolean = type === 'home';

  const { ipadScreen, tabletScreen, largeMobileScreen, smallMobileScreen } =
    useBreakpoints();
  return (
    <>
      <Container containerWidth="normal">
        <HeaderElement isHomePage={isHomePage}>
          {tabletScreen ? (
            <>
              <HeaderIconButton onClick={() => setOpenDrawer(true)}>
                <IconMenu2 color={colors.PRIMARY} />
              </HeaderIconButton>
              <Link to="/">
                <LogoIcon size={118} />
              </Link>
            </>
          ) : (
            <>
              <Flex justifyContent="space-between" flex={1}>
                <Nav style={{ justifyContent: 'space-between', width: '100%' }}>
                  <Link to="/">
                    <LogoIcon size={118} />
                  </Link>
                  <NavLink
                    component={Link}
                    to="/categories"
                    label={trans('categories')}
                    icon={<SMIcon src={Icons.CategoryIcon} />}
                    classNames={{
                      root: classes.root,
                    }}
                  />
                  <NavLink
                    component={Link}
                    to="/aboutUS"
                    label={trans('aboutUs')}
                    icon={<SMIcon src={Icons.AboutUsIcon} />}
                    classNames={{
                      root: classes.root,
                      body: classes.body,
                    }}
                  />
                  <NavLink
                    component={Link}
                    to="/contactUS"
                    label={trans('contactUS')}
                    icon={<SMIcon src={Icons.CallIcon} />}
                    classNames={{
                      root: classes.root,
                      body: classes.body,
                    }}
                  />
                  <NavLink
                    component={Link}
                    to="/serviceProvider"
                    label={trans('serviceProvider')}
                    icon={<SMIcon src={Icons.AddIcon} />}
                    classNames={{
                      root: classes.root,
                      body: classes.body,
                    }}
                  />
                </Nav>
                <Nav>
                  <SMIcon src={Icons.NotificationIcon} />
                  <SMIcon src={Icons.Heart} />
                  <SMIcon src={Icons.PersonIcon} />
                  <SMIcon src={Icons.ShopIcon} />
                </Nav>
              </Flex>
            </>
          )}
        </HeaderElement>
      </Container>
    </>
  );
}
