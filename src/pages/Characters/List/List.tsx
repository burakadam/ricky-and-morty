import * as S from './List.styles';
import { Main } from './views/Main';

function List(): JSX.Element {
  return (
    <>
      <S.Title>Hello Rick And Morty characters</S.Title>
      <Main />
    </>
  );
}

export { List };
