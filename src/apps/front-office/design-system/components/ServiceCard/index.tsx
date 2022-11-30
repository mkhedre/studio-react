import { Button, Card, Image, Text } from '@mantine/core';
import { trans } from '@mongez/localization';
import { Link } from '@mongez/react-router';

interface CardProps {
  src: string;
  name: string;
  desc: string;
  to: string;
}

const ServiceCard = ({ src, name, desc, to }: CardProps) => {
  return (
    <Card shadow="sm" p="xl" component={Link} to={to}>
      <Card.Section>
        <Image
          src={src}
          height={160}
          alt="name"
          style={{
            overflow: 'hidden',
          }}
        />
      </Card.Section>
      <Text weight={500} size="lg" mt="md">
        {trans(name)}
      </Text>
      <Text weight={200} size="md" mt="sm">
        {trans(desc)}
      </Text>
      <Button variant="outline" radius="xl" mt={10}>
        {trans('exploreCompanies')}
      </Button>
    </Card>
  );
};

export default ServiceCard;
