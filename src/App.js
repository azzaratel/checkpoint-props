import logo from './logo.svg';
import './App.css';
import Profil from './Profil/Profil';

function App() {
  const fullname ="Azza Ratel";
  const bio ="Escape from the negativity, Embrace the positivity and see the changes.";
  const profession=" Web Dev Student"
  const handleName= (x)=>alert (x);
  return (
   <div>
<Profil name={fullname}
        bio={bio}
        prof={profession}
        handleName= {handleName} 
        />
   </div>
  );
}

export default App;
