import { Grid } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';
import Icons from 'shared/assets/svgs/index';
import PaymentMethods from 'shared/assets/svgs/pay/b-300x37.png';
import { Container, Flex } from '../../components/Containers';
import Text from '../../components/Text';
import { SMIcon } from '../Header/style';
import { FooterElement } from './style';
const CopyRights = () => {
  return (
    <Container>
      <FooterElement>
        <Grid>
          <Grid.Col xs={12} lg={3} md={6}>
            <Text text={trans('paymentMethods')} />
            <img src={PaymentMethods} />
          </Grid.Col>
          <Grid.Col xs={12} lg={3} md={6}>
            <Text text={trans('footerWrites')} />
            <Flex>
              <SMIcon src={Icons.Facebook} />
              <SMIcon src={Icons.Facebook} />
              <SMIcon src={Icons.Facebook} />
              <SMIcon src={Icons.Facebook} />
            </Flex>
          </Grid.Col>
          <Grid.Col xs={12} lg={3} md={6}>
            <Flex>
              <Text text={trans('designdWith')} />
              <Link to="https://www.rh.net.sa/">
                <img src={Icons.Rowwad} alt="rowaad" />
              </Link>
            </Flex>
          </Grid.Col>
        </Grid>
      </FooterElement>
    </Container>
  );
};

export default CopyRights;
