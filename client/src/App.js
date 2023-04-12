import React, {useState} from 'react'
import axios from "axios";
import './App.css';


function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");

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

  }

  const load_how_it_works = () => {
    
  }

  return (
    <div>
      <header>
        <div className="subheader">NeuroDetect</div>
        <button className="headerbutton" onClick={load_about}>About</button>
        <button className="headerbutton" onClick={load_how_it_works}>How it Works</button>
      </header>
      <h1>CNN Image Prediction</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button id="predict_btn" onClick={handleImageSubmit}>Predict</button>
      {prediction && <p>{prediction}</p>}
    </div>
  )
}

export default App
