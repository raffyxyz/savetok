import React from 'react';
import {
  Group,
  Image,
  Text,
  ActionIcon,
  Box,
  Tooltip,
  ScrollArea,
} from '@mantine/core';
import { IconTrash, IconCopy } from '@tabler/icons';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

const VideoHistory = () => {
  const history = useLiveQuery(() =>
    db.history.orderBy('id').reverse().toArray()
  );

  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
  };
  const deleteHistory = (id) => {
    db.history.delete(id);
  };

  const trimTitle = (str) => {
    if (str.length < 16) return str;

    return str.substring(0, 16) + '..';
  };
  return (
    <ScrollArea style={{ height: 450 }}>
      {history?.map((h) => (
        <Box
          key={h.id}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',
            marginBottom: '5px',

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Group position='apart'>
            <Image
              src={h.cover}
              radius='sm'
              fit='cover'
              height={40}
              width={50}
              alt='Video cover'
            />
            <Tooltip label={h.title}>
              <Text size='xs'>{trimTitle(h.title)}</Text>
            </Tooltip>
            <Group spacing={-1}>
              <ActionIcon color='blue' onClick={() => copyLink(h.url)}>
                <IconCopy size={16} />
              </ActionIcon>
              <ActionIcon color='red' onClick={() => deleteHistory(h.id)}>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </Group>
        </Box>
      ))}
    </ScrollArea>
  );
};

export default VideoHistory;
