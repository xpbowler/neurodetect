import React, {useState, useEffect} from 'react'
import axios from "axios";



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

  return (
    <div>
      <h1>CNN Image Prediction</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <br />
      <br />
      <button onClick={handleImageSubmit}>Predict</button>
      {prediction && <p>{prediction}</p>}
    </div>
  )
}

export default App
