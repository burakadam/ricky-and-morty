import { Typography } from '@mui/material';

import { Main } from './views/Main';

function Characters(): JSX.Element {
  return (
    <>
      <Typography variant="h3" textAlign="center" mb={5}>
        Hello Rick And Morty characters
      </Typography>
      <Main />
    </>
  );
}

export { Characters };
