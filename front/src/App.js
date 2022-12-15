import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import { Route,BrowserRouter as Router , Routes , useLocation} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AnimatedRoutes from './components/AnimatedRoutes';

const a  = () =>{
  // $("p").on({
  //   click:() =>{}
  // })

  // $(document).on({
  //     mousemove:(e) =>{
      
  //       $('#teste').text("mouse x: " + e.pageX + "mouse y: " + e.pageY)
  //     }
  // })
}

function App() {
  return (
  <Router>
    <AnimatedRoutes/>
  </Router>
  
  );
}

export default App;
