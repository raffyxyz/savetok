import React, { useState } from 'react';
import { Group, TextInput, Button } from '@mantine/core';
import { IconLink } from '@tabler/icons';
import { useForm } from '@mantine/form';
import axios from 'axios';
import VideoResult from './VideoResult';

const VideoBox = () => {
  const [loader, setLoader] = useState(false);
  const [videodata, setVideoData] = useState({});

  const form = useForm({
    initialValues: {
      link: '',
    },

    validate: {
      // link: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      link: (value) =>
        value.length === 0
          ? 'Link should not be empty'
          : /^(ftp|http|https):\/\/[^ "]+$/.test(value)
          ? null
          : 'Input is not a link',
    },
  });

  const getVideoInfo = async (values) => {
    setLoader(true);
    setVideoData({});
    try {
      axios
        .get(`https://www.tikwm.com/api/?url=${values.link}?hd=1`)
        .then((response) => {
          const downloadInfo = response.data.data;
          setVideoData(downloadInfo);
          setLoader(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ marginTop: '4em' }}>
        <form onSubmit={form.onSubmit((values) => getVideoInfo(values))}>
          <Group position='center' spacing='xs' align='flex-start'>
            <TextInput
              placeholder='Paste link here'
              size='lg'
              sx={{ width: '600px' }}
              icon={<IconLink size={14} />}
              {...form.getInputProps('link')}
            />
            <Button
              size='lg'
              color='grape'
              loading={loader}
              loaderPosition='right'
              type='submit'
            >
              Get Video
            </Button>
          </Group>
        </form>
      </div>

      <VideoResult video={videodata} loader={loader} />
    </>
  );
};

export default VideoBox;
