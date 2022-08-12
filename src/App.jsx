import './App.scss'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <SideBar/>
        <Main/>
      </div>
    </div>
  )
}

export default App
