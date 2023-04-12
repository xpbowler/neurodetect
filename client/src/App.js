import React, {useState, useEffect} from 'react'
import axios from "axios";
import './App.css';



function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [content, setContent] = useState(null);
  const [mainp, setMainp] = useState(0);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    axios.post("http://localhost:5001/",formData).then((response) => {
        setPrediction(response.data);
      });
  };

  const load_about = () => {
    setContent(
      <>
        <p>About page</p>
      </>
    )
  }

  const load_how_it_works = () => {
    setContent(
      <>
        <p>How it works page</p>
      </>
    )
  }

  useEffect(()=> {
    setContent(
      <>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button id="predict_btn" onClick={handleImageSubmit}>Predict</button>
        {<p id="result">{prediction}</p>}
      </>
    );
  },[mainp])

  return (
    <div>
      <header>
        <button className="headerbutton" onClick={()=> setMainp((prevMainp)=> prevMainp + 1)}>NeuroDetect</button>
        <button className="headerbutton" onClick={load_about}>About</button>
        <button className="headerbutton" onClick={load_how_it_works}>How it Works</button>
      </header>
      <div>{content}</div>
    </div>
  )
}

export default App
