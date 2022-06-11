import { useEffect,useState } from 'react';
import './App.css';
import Form from './components/Form';

 
function App() {
  const url = "https://api.imgflip.com/get_memes"
  const [memeImages,setMemeImages] = useState([])

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> 
        data["data"]["memes"].map((memeObj)=> setMemeImages((memeImages)=>[...memeImages,memeObj["url"]])))
    .catch((err)=>console.error(err))
  },[])

  

  return (
    <div className="App">
        <Form memeImages={memeImages}/>
    </div>
  );
}

export default App;
