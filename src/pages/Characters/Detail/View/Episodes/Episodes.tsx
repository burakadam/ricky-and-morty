import { Avatar, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import type { Episode } from '@/gql/graphql';

import type { IEpisodeProps } from '.';
import * as S from './Episodes.styles';

const Episodes = ({ episodes }: IEpisodeProps) => (
  <S.Container>
    <Typography variant="h4">EPISODES</Typography>
    <S.Roster>
      {episodes &&
        episodes?.map(({ id, name, air_date }: Episode) => (
          <S.Item key={id}>
            <ListItemAvatar>
              <Avatar>
                <span>E</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={air_date} />
          </S.Item>
        ))}
    </S.Roster>
  </S.Container>
);

export { Episodes };
