import React from 'react';
import { Card, Group, Image, Text, ActionIcon } from '@mantine/core';
import { IconTrash, IconCopy } from '@tabler/icons';

const VideoHistory = () => {
  const copyLink = () => {
    console.log('Copy logic');
  };
  const deleteHistory = () => {
    console.log('Delete logic');
  };
  return (
    <Card mt='sm' shadow='sm' radius='md' withBorder>
      <Group position='apart'>
        <Image src='#' radius='sm' height={40} width={40} alt='Video cover' />
        <Text size='md'>..</Text>
        <Group spacing={-1}>
          <ActionIcon color='blue' onClick={copyLink}>
            <IconCopy size={16} />
          </ActionIcon>
          <ActionIcon color='red' onClick={deleteHistory}>
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default VideoHistory;
