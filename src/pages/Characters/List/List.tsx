import * as S from './List.styles';
import { Filters } from './views/Filters';
import { Main } from './views/Main';

function List(): JSX.Element {
  return (
    <>
      <S.Title>Hello Rick And Morty characters</S.Title>
      <S.Container>
        <Filters />
        <Main />
      </S.Container>
    </>
  );
}

export { List };
