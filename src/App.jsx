import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./Principal";
import Layout from "./Layout";
import Statistics from "./Statistics";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Principal />} />
          <Route path='/estadisticas' element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
