import Header from './components.js/Header';
import Clubs from './Data';
import Cards from './components.js/Cards';
import './App.css';

function App() {
  const team = Clubs.map(club=>{
    return(
      <Cards
      name={club.name}
      logo={club.logo}
      stadium={club.stadium} 
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className='flex'>
        {team}
      </div>

    </div>
  );
}

export default App;
