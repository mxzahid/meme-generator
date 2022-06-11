import React from "react"

export default function Meme(props){
    return (
        <div style={{"maxHeight":"50%","maxWidth":"50%","paddingLeft":"500px"}}>
            <div className="meme-container">
                <img src={props.memeUrl} alt="memeImage" style = {{"width":"100%"}} />
                <h1 className="top-text">{props.topText}</h1>
                <h1 className="bottom-text">{props.bottomText}</h1>
            </div>
        </div>
    )
} 