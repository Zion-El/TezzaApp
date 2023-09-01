import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ClientProfile from "./components/dashboard/ClientProfile";
import Client from "./components/dashboard/Clients";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Login/>}/>
          <Route exact path="/dashboard" element={ <Dashboard/>}/>
          <Route exact path="/client-profile/:id" element={ <ClientProfile/>}/>
          <Route exact path="/client" element={ <Client/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
