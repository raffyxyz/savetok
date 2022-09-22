import React, { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap';


import Loader from '../util/Loader';
import Alert from '../util/Alert';
import Result from './Result'



// import FileSaver from 'file-saver';

const axios = require('axios');

// const downloadLink = useState('')


// const save = (downloadLink, title) => {
//     FileSaver.saveAs(
//         downloadLink,
//         title + ".mp4"
//     );
// }

const UrlBox = () => {

    const [link, setLink] = useState('');
    const [video, setVideo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, showError] = useState(false);

    const isLinkValid = () => {
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        var linktest = link;

        return regex.test(linktest);
    }

    const isLinkNotEmpty = () => {
        return link !== '';
    }

    const isVideoDataNotEmpty = () => {
        return Object.keys(video).length !== 0;
    }

    const fetchVideo = () => {
        setLoading(true);
        if (isLinkNotEmpty()) {
            if (isLinkValid()) {
                showError(false);
                try {
                    axios.get(`https://www.tikwm.com/api/?url=${link}?hd=1`)
                        .then(function (response) {
                            // handle success
                            const downloadInfo = response.data.data;
                            setVideo(downloadInfo);
                            console.log(downloadInfo)
                            setLoading(false);
                        });
                } catch (error) {
                    console.log(error)
                }
            } else {
                setLoading(false);
                showError(true);
            }
            // showError(false);
        } else {
            setLoading(false)
            showError(true);
        }
    }

    return (
        <>
            <h3 className='text-center mt-5 headline f-bold'>Tiktok Video Downloader</h3>
            <h6 className='text-center headline'>Download tiktok videos without watermark.</h6>

            <div className='url-box-wrapper' style={{ margin: 'auto' }}>
                <InputGroup className="mt-5" >

                    <Form.Control
                        className='url-box shadow-none'
                        placeholder="Paste copied link here"
                        aria-label="Paste copied link here"
                        aria-describedby="basic-addon2"
                        size='lg'
                        onChange={event => setLink(event.target.value)}
                    />
                    <Button
                        className='fetch-btn shadow-none'
                        onClick={fetchVideo}
                    >Download</Button>

                </InputGroup>
            </div>

            <div className='text-center'>
                {loading && <Loader />}
                {error && <Alert />}
                {isVideoDataNotEmpty() && <Result result={video} />}
            </div>
        </>
    )
}

export default UrlBox