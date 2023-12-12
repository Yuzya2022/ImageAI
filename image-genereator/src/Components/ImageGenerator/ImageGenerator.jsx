import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.png'

export const ImageGenerator = () => {

    const[image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        if(inputRef.current.value ===""){
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer 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",
                    "User-Agent":"Chrome"
                },
                body:JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n:1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
    }
    
return (
    <div className='ai-image-generator'>
        <div className="header">Ai Image <span>generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url==="/"?default_image:image_url} alt="" /></div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
            <div className="generate-btn" onClick={()=>{imageGenerator()}}>
                Generate
            </div>

        </div>
    </div>
  )
}
