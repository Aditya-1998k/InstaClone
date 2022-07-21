import LandingPage from "./component/landingPage";
import PostView from "./component/postView";
import FormData from "./component/formData"
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<LandingPage/>}></Route>
    <Route exact path="/postview" element={<PostView/>}></Route>
    <Route exact path="/formdata" element={<FormData/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
