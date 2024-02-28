import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import RFPList from './components/RFPList';
import RfpTable from './components/RfpTable';

function App() {
  return (
    <>
      <TopBar/>
      <RFPList/>
      <RfpTable/>
    </>
  );
}

export default App;
