import './App.css';
import Profile_photo from './Component/Profile/ProfilePhoto';
import MyFullName from './Component/Profile/FullName';
import MyAdress from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <div className="profile">
         <div className="container">
         <Profile_photo />
        </div>
        <div className="text">
          <MyFullName />
          <div className="content">
          <div className="details"> 
            <h1>  Singer, songwriter and model</h1>
            <h3> ABOUT ME</h3> 
            <p> I was born in London, England, the eldest child of Kosovo 
              Albanian parents Anesa (née Rexha) and Dukagjin Lipa from Pristina, 
              FR Yugoslavia.. My family is of Muslim heritage.</p>
            <h3> My Work</h3> 
              <li>  eponymous debut album in 2017 and second studio album, Future Nostalgia (2020)</li>
              <li> At 2018 Brit Awards, won for British Female Solo Artist and British Breakthrough Act.</li>
              <li> In 2019, won the Grammy Award for Best New Artist</li>
              <li> cover face of "Boom Boom Thick" editorial for Elle's January 2016</li>
          </div>
          </div>
        </div>  
      </div>
      <MyAdress />
    </div>
  );
}

export default App;