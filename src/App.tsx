import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { AppBarLayout } from './components/AppBarLayout';
import Experiences from './components/Experiences';
import Profiles from './components/Profiles';
import Certificates from './components/Certificates';
import Publications from './components/Publications';

function App() {
  const theme = createTheme({
    palette: {
      // mode: "dark"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AppBarLayout />
      <Box display="flex" alignItems="center" margin={4} padding={7} fontSize="1.6rem">
        I have about 6 years of experience in the industry. Which primarily is in C++, Python and Java. I am working as an Application engineer in Amazon and I have worked as a full stack dev for 4 years in Oracle and 1 year as Devops in Flytxt. I occasionally answer questions on stackoverflow particularly in Python. I also enjoy doing some side projects.
      </Box>
      <Stack spacing={4} padding={3}>
        <Experiences />
        <Profiles />
        <Publications />
        <Certificates />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
