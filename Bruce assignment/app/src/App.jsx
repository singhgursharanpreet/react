import{BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Navmenu from './Navmenu.jsx';
import Details from './Details.jsx';
import './App.css'
 
function DetailsWrapper()
{
  const{Item}=useParams();
  return <Details Item={Item} />
}
function App() {
 
 
  return (
    <Router>
      <div>
        <Navmenu />
        <Routes>
          <Route path="/item/:Item" element={<DetailsWrapper />}/>
        </Routes>
      </div>
     
    </Router>
  )
}
 
export default App
