import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Upload = React.lazy(() => import("pages/Upload"));
const Predict = React.lazy(() => import("pages/Predict"));
const MenuAbout = React.lazy(() => import("pages/MenuAbout"));
const MenuUpload = React.lazy(() => import("pages/MenuUpload"));
const MenuPredict = React.lazy(() => import("pages/MenuPredict"));
{/*const Menu = React.lazy(() => import("pages/Menu"));*/}
const Home1 = React.lazy(() => import("pages/Home1"));
const About = React.lazy(() => import("pages/About"));
{/*const PredictOne = React.lazy(() => import("pages/PredictOne"));*/}
const PredictTwo = React.lazy(() => import("pages/PredictTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          {/*<Route path="/menu" element={<Menu />} />*/}
          <Route path="/menupredict" element={<MenuPredict />} />
          <Route path="/menuupload" element={<MenuUpload />} />
          <Route path="/menuabout" element={<MenuAbout />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predicttwo" element={<PredictTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
