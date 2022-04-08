
import './App.css';
import ContactUs from './day1/contact_us';
import Download from './day1/download';
import Help from './day1/help';
import Home from './day1/home';
import JoinUs from './day1/join_us';
import Login from './day1/login';
import Search from './day1/search';
import Setting from './day1/setting';


function App() {
  return (

   <div className="App">

     <JoinUs/>
     <Setting/>
     <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>

   </div>
  )
}

export default App;



