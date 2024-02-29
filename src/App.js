
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import RFPList from './components/RFPList';
import RfpDetail from './components/RfpDetail'


function App() {
  return (
    <>
      <TopBar/>
      <Router>
        <Routes>
          <Route path='/' element={<RFPList/>}/>
          <Route path='/rfps/:rfpId' element={<RfpDetail rfpId=""/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
