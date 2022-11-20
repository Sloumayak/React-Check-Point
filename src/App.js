
import "./App.css";
import { FaBeer } from 'react-icons/fa';
import Conversion from "./Components/Conversion";
import Backmaquette from "./Components/Backmaquette";



const App = () => {

return (

  <div style={bodyStyle}>
  <Conversion />
  <Backmaquette />
  </div>

)
}




const bodyStyle ={
  position: 'absolute' ,
  backgroundColor: '#D3D3D3',
  width: '100%',
  height: '100%',
  
}

export default App;
