import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { Error } from '@/components/Error';
import { Loading } from '@/components/Loading';

import { NameField } from './components/NameField';
import * as S from './Detail.styles';
import { Banner } from './View/Banner';
import { Episodes } from './View/Episodes';
import { Features } from './View/Features';

const GET_CHARACTER_DETAIL = gql(/* GraphQL */ `
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      status
      gender
      type
      species
      episode {
        id
        name
        air_date
      }
    }
  }
`);

const Detail = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_CHARACTER_DETAIL, { variables: { id } });

  if (loading) return <Loading />;
  if (error || !data.character) return <Error message={error?.message} />;

  // eslint-disable-next-line @typescript-eslint/naming-convention, unused-imports/no-unused-vars
  const { name, image, episode, __typename, ...rest } = data.character;

  return (
    <S.Container>
      <Banner name={name} image={image} />
      <NameField variant="h2" title="NAME" label={data?.character?.name} />
      <Features list={rest} />
      <Episodes episodes={episode} />
    </S.Container>
  );
};

export { Detail };
