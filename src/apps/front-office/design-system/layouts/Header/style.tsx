import styled from '@emotion/styled';
import { NavLink } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';
import mediaQueries from 'shared/constants/mediaQueries';

const {
  ipad,
  laptop,
  largescreens,
  largmobile,
  midscreens,
  miniLaptop,
  smallmobile,
  tablet,
} = mediaQueries;
interface HeaderProps {
  isHomePage?: boolean;
}
interface SMIconProps {
  width?: string | number;
  height?: string | number;
}
export const HeaderWrapper = styled('div')({
  padding: ' 0 0px',
  zIndex: '10',
  position: 'absolute',
  width: '100%',
  left: '0',
});

export const SMIcon = styled('img')((Props: SMIconProps) => ({
  width: Props.width ? Props.width : '25.53px',
  height: Props.height ? Props.height : '25.53px',
  borderRadius: '10px',
}));
export const HeaderElement = styled('header')(({ isHomePage }: HeaderProps) => {
  let homePageProperties = {};
  if (isHomePage) {
    homePageProperties = {
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: 'transparent',
      position: 'absolute',
      padding: '0 5rem',
      [ipad]: {
        padding: '0 1.5rem',
      },
      zIndex: 50,
    };
  }
  return {
    width: '100%',
    marginTop: '2.2rem',
    display: 'flex',
    alignItems: 'center',
    [laptop]: {
      marginTop: '1.5rem',
    },
    [tablet]: {
      marginTop: '1.25rem',
      justifyContent: 'space-between',
    },
    ...homePageProperties,
  };
});

export const HeaderIconButton = styled(IconMenu2)({
  marginLeft: 'auto',
});

export const Nav = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  [laptop]: {
    gap: '1.5rem',
  },
  [ipad]: {
    gap: '.5rem',
  },
  [tablet]: {
    flexDirection: 'column',
  },
});

export const StyledNavLink = styled(NavLink)({
  '& .mantine-NavLink-icon': {
    paddingLeft: '10px',
  },
});
