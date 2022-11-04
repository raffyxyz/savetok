import React, { useState } from 'react';
import {
  Drawer,
  Group,
  Button,
  Anchor,
  Title,
  Text,
  Space,
  Divider,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';

const AppHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Group position='apart' mt='md'>
        <Anchor underline={false} size='30px' variant='text' weight='bold'>
          SaveTok
        </Anchor>

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title='About'
          padding='xl'
          position='right'
          size='xl'
        >
          <Divider my='sm' />
          <Title order={2} color='grape'>
            SaveTok
          </Title>
          <Text>Tiktok Video Downloader</Text>
          <Space h='lg' />
          <Text>
            A web app that downloads tiktok videos without the annoying tiktok
            watermark.
          </Text>
          <Space h='lg' />
          <Title order={5}>Why you should use this kind of service?</Title>
          <Text>
            Use this service to repost tiktok videos on other social media sites
            without the annoying watermark
          </Text>
          <Space h='lg' />
          <Title order={5}>How to use the service?</Title>
          <Text>
            Just paste tiktok video link in the textbox and click getVideo, wait
            for it to load the video info and download button.
          </Text>
          <Space h='lg' />
          <Title order={5}>Tech used</Title>
          <List
            spacing='xs'
            size='sm'
            mt='xs'
            center
            icon={
              <ThemeIcon color='teal' size={16} radius='xl'>
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>React.js a frontend js library</List.Item>
            <List.Item>Mantine a frontend components framework</List.Item>
            <List.Item>Tiktokwm Api</List.Item>
          </List>
          <Space h='xl' />
          <Title order={5}>Developed by</Title>
          <Text>Raffy Amoguis a self taught web developer.</Text>
        </Drawer>
        <Button variant='light' color='grape' onClick={() => setOpened(true)}>
          About
        </Button>
      </Group>
    </>
    // <Center>
    //   <Title order={1}>SaveTok</Title>
    // </Center>
  );
};

export default AppHeader;
