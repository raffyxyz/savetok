import './App.css';
import { Container, Title, MantineProvider } from '@mantine/core';
import AppHeader from './components/AppHeader';
import VideoBox from './components/VideoBox';

function App() {
  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans, sans-serif',
          headings: { fontFamily: 'Open Sans, sans-serif' },
        }}
        withGlobalStyles
      >
        <Container size='md' px='md'>
          <AppHeader />

          <Title order={3} align='center' sx={{ marginTop: '4em' }}>
            Tiktok Video Downloader
          </Title>
          <Title order={6} align='center'>
            Download Tiktok Videos Without Watermark
          </Title>

          <VideoBox />
        </Container>
      </MantineProvider>
    </>
  );
}

export default App;
