import { Flex } from '../Containers';
import { HeadingTitle, HeadingWrapper } from './style';

interface HeadingProps {
  title: string;
  subTitle?: string;
  icon?: React.ReactNode;
  badge?: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        width="100%"
        alignItems="center"
      >
        <HeadingWrapper>
          <HeadingTitle>{props.title}</HeadingTitle>
        </HeadingWrapper>
      </Flex>
    </>
  );
}
