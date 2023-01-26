// eslint-disable-next-line simple-import-sort/imports
import type { IFeaturesProps } from '.';
import { NameField } from '../../components/NameField';

import * as S from './Features.styles';

const Features = (props: IFeaturesProps) => {
  return (
    <S.Container>
      {Object.entries(props.list).map(([key, value]) => (
        <NameField variant="h4" title={key.toLocaleUpperCase()} label={String(value || '-')} key={key} />
      ))}
    </S.Container>
  );
};

export { Features };
