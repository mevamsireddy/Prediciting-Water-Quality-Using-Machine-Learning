import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>

      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/menupredict">MenuPredict</Link>
        </li>
        <li>
          <Link to="/menuupload">MenuUpload</Link>
        </li>
        <li>
          <Link to="/menuabout">MenuAbout</Link>
        </li>
        <li>
          <Link to="/predict">Predict</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/predicttwo">PredictTwo</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
