import './App.css';
import { Container, Title } from '@mantine/core';
import AppHeader from './components/AppHeader';
import VideoBox from './components/VideoBox';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
