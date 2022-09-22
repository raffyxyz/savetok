import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import './alert.css'

const Alert = () => {
    return (
        <div className='alert-result mt-4'>
            <AiOutlineWarning
                className='mt-4'
                style={{ color: 'red', fontSize: '20pt' }} />
            <h6
                style={{ color: 'red' }}>Please enter a valid url</h6>
        </div>
    )
}

export default Alert