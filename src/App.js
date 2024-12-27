import { HashRouter,Routes,Route } from "react-router-dom";
import Mydashboard from "./home";
import AddStudent from "./new/newstu";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<Mydashboard/>}/>
      <Route exact path="/stu" element={<AddStudent/>}/>
   </Routes>
   </HashRouter>
  );
}

export default App;
