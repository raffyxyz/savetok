import React, { useState } from 'react'
import fileDownload from 'js-file-download'



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


    const handleClick = () => {
        axios.get(`https://www.tikwm.com/api/?url=${link}`)
            .then(function (response) {
                // handle success
                const downloadInfo = response.data.data;
                // save(downloadInfo.play, downloadInfo.id)
                handleDownload(downloadInfo.play, downloadInfo.id + ".mp4");
                console.log(downloadInfo);
                console.log(response)
            });
    }

    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }

    return (
        <>
            <input type='text' onChange={event => setLink(event.target.value)}></input>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UrlBox