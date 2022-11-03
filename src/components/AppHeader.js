import React from 'react';
import { Center, Title, Group, Avatar, Anchor } from '@mantine/core';

const AppHeader = () => {
  return (
    <Anchor underline={false} size='30px' variant='text' weight='bold'>
      SaveTok
    </Anchor>
    // <Center>
    //   <Title order={1}>SaveTok</Title>
    // </Center>
  );
};

export default AppHeader;
