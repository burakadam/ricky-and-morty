declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
    };
  }
  interface ThemeOptions {
    palette?: {
      primary?: {
        main?: string;
      };
    };
  }
}
