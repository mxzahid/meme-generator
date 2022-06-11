import React from "react"
import { useReducer } from "react"
import Meme from "./Meme"

const initialState = {topText:"", bottomText:"", showMeme:false,memeUrl:""}

let reducer = (state,action)=>{
    switch(action.type){
        case "handleTextChange":
            return {...state, [action.field]:action.payload}
        case "generateMeme":
            return {...state, showMeme:true}
        default:
            return state
    }
}

export default function Form(props){
    const [state,dispatch] = useReducer(reducer,initialState)
    const handleTextChange = (event) =>{
        dispatch({type:"handleTextChange",
                  field: event.target.name,
                  payload:event.target.value})
    }
    const memeUrl = props.memeImages[Math.floor(Math.random() * props.memeImages.length)]
    return (
        <form>
            <input
                type="text"
                name="topText"
                value={state.topText} 
                onChange = {(event)=>handleTextChange(event)}/>
            <input
                type="text"
                name="bottomText"
                value={state.bottomText}
                onChange = {(event)=>handleTextChange(event)}
            />
            <button type="button" onClick={()=>dispatch({type:"generateMeme"})}>Generate Meme</button>
            {state.showMeme && <Meme memeUrl={memeUrl} topText={state.topText} bottomText={state.bottomText}/>}
        </form>
    )
}