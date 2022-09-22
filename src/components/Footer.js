import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <hr className='mt-5' />
            <h5 className='mt-5 f-bold'>How to download tiktok videos without watermark?</h5>
            <ListGroup className='list' as="ol" numbered variant="flush">
                <ListGroup.Item as="li" className='border-0 text-muted'>
                    Copy the link of the tiktok video you want to download.
                </ListGroup.Item>
                <ListGroup.Item as="li" className='border-0 text-muted'>
                    Paste the copied link in the textbox above.
                </ListGroup.Item>
                <ListGroup.Item as="li" className='border-0 text-muted'>
                    Wait for it to load the download Button.
                </ListGroup.Item>
                <ListGroup.Item as="li" className='border-0 text-muted'>
                    Click the download button to save the video without watermark.
                </ListGroup.Item>
            </ListGroup>

            <h5 className='mt-4 f-bold'>Note:</h5>
            <p className='text-muted'>If the video doesnt load please check the copied link, or reload the app.</p>

            <hr className='mt-5' />
            <p className='text-center mb-1'>&copy; 2022 SaveTok. All Rights Reserved.</p>
        </Container>
    )
}

export default Footer