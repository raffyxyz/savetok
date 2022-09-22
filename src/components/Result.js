import React from 'react'
import { Card, Image, Row, Col, Button } from 'react-bootstrap'
import fileDownload from 'js-file-download'
const axios = require('axios');

const Result = ({ result }) => {

    const handleDownload = (url, filename) => {
        // e.preventDefault();
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, 'SaveTok_' + filename + '.mp4')
            })
    }

    return (
        <div className='result mt-4'>
            <Row >
                <Col>
                    <Image className='resize' thumbnail={true} src={result.origin_cover} />
                </Col>
                <Col>
                    <Image
                        className='mt-2'
                        src={result.author.avatar}
                        roundedCircle={true}
                        width={60}
                        height={60} />
                    <h3 className='f-bold headline'>{result.author.nickname}</h3>
                    <p className='headline'>{result.title}</p>
                    <Button
                        className='download-btn'
                    >
                        Download Video
                    </Button>
                </Col>
            </Row>
        </div>
        // <Card
        //     className='mt-4'
        //     style={{ width: '40rem', margin: 'auto' }}>
        //     <Row>
        //         <Col>
        //             <Card.Img
        //                 variant="center"
        //                 className='mt-2'
        //                 src={result.origin_cover}
        //                 width={200}
        //                 height={200} />
        //         </Col>
        //         <Col>
        //             <Image
        //                 className='mt-2'
        //                 src={author.avatar}
        //                 roundedCircle={true}
        //                 width={60}
        //                 height={60}
        //                 style={{ margin: 'auto' }} />
        //             <Card.Body>
        //                 <Card.Title>{author.nickname}</Card.Title>
        //                 <Card.Text>{result.title}
        //                 </Card.Text>
        //             </Card.Body>
        //         </Col>
        //     </Row>
        //     <Button
        //         className='w-50 mb-4'
        //         style={{ margin: 'auto' }}>
        //         Download Video No Watermark
        //     </Button>
        // </Card >
    )
}

export default Result