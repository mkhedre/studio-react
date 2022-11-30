import { Button, Container, createStyles, TextInput } from '@mantine/core';
import { trans } from '@mongez/localization';
import { PurpleButton } from 'design-system/components/Button';
import Text from 'design-system/components/Text';
import { SMIcon } from 'design-system/layouts/Header/style';
import landingImage from 'shared/assets/images/overlay.png';
import Icons from 'shared/assets/svgs';
import colors from 'shared/constants/colors';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { LandingContent, WithOverlay } from './style';

const useStyles = createStyles((theme) => ({
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
const EasyOrder = () => {
  const { classes } = useStyles();
  const { tabletScreen, largeMobileScreen } = useBreakpoints();
  return (
    <>
      <WithOverlay cover={landingImage} />
      <LandingContent
        maxWidth={tabletScreen || largeMobileScreen ? '100%' : ' 45%'}
      >
        <Container>
          <PurpleButton>hgjfdks</PurpleButton>
          <Text
            element="subHeading"
            text={trans('doProjectsRemotely')}
            color={colors.SECONDARY}
            fontSize={tabletScreen ? '15px' : '30px'}
          />
          <Text
            element="heading"
            text={trans('askEasly')}
            color={colors.PRIMARY}
            fontSize={tabletScreen ? '21px' : '42px'}
            weight={800}
          />
          <Text
            text={trans('askAny')}
            color={colors.GRAY}
            fontSize={tabletScreen ? '12px' : '24px'}
          />

          <div className={classes.controls}>
            <Button
              className={classes.control}
              variant="default"
              size={tabletScreen ? 'sm' : 'lg'}
            >
              {trans('offices')}
              <SMIcon src={Icons.ArrowDown} />
            </Button>

            <TextInput
              placeholder={trans('searchWithOfficeName')}
              size={tabletScreen ? 'sm' : 'lg'}
              classNames={{
                input: classes.input,
                root: classes.inputWrapper,
              }}
            ></TextInput>
          </div>
          {/* <Box>
            <Select
              rightSection={<IconChevronDown size={14} />}
              rightSectionWidth={30}
              styles={{
                rightSection: { pointerEvents: 'none' },
              }}
              data={['React', 'Angular', 'Svelte', 'Vue']}
              size="lg"
            />
          </Box> */}
        </Container>
      </LandingContent>
    </>
  );
};

export default EasyOrder;
