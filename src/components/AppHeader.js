import React, { useState } from 'react';
import { Drawer, Group, Button, Anchor } from '@mantine/core';

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
          {/* Drawer content */}
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
