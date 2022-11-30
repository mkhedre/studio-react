import { Box, Grid } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Container } from 'design-system/components/Containers';
import Heading from 'design-system/components/Heading';
import Text from 'design-system/components/Text';
import { SMIcon } from 'design-system/layouts/Header/style';
import Icons from 'shared/assets/svgs';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { WhyUsContainer } from './style';

const data = [
  {
    icon: Icons.StudioIcon3,
    text: 'choseUs3',
  },
  {
    icon: Icons.StudioIcon2,
    text: 'choseUs2',
  },
  {
    icon: Icons.StudioIcon1,
    text: 'choseUs1',
  },
];

const WhyUs = () => {
  const { miniLaptopScreen, tabletScreen, smallMobileScreen, ipadScreen } =
    useBreakpoints();
  return (
    <WhyUsContainer
      paddingTop={tabletScreen ? '15px' : miniLaptopScreen ? '20px' : '72px'}
      paddingBottom={'92px'}
      paddingLeft={tabletScreen ? '15px' : miniLaptopScreen ? '100px' : '72px'}
    >
      <Container containerWidth="normal">
        <Heading title={trans('whyStudio')} />
        <Grid gutter={tabletScreen || smallMobileScreen ? 150 : 15}>
          {data.map((item, index) => (
            <Grid.Col key={index} md={6} lg={4} xs={12}>
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                <SMIcon src={item.icon} width={'50px'} height={'50px'} />
                <Text text={trans(item.text)} />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </WhyUsContainer>
  );
};

export default WhyUs;
