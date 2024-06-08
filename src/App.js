import Accordition from './components/Accordition';
import Contact from './components/Contact';
import Fifth from './components/Fifth';
import First from './components/First';
import Footer from './components/Footer';
import Fourth from './components/Fourth';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import VideoComponent from './components/VideoComponent';

function App() {
  return (
   <>
    <div style={{background:'linear-gradient(360deg, rgba(255, 207, 135, 0.62) 0%, rgba(255, 153, 0, 0) 79.41%)',paddingTop:'20px',paddingBottom:'10px'}}>
      <p className="text-center font-normal text-base leading-5">
        Join our community. <span className="font-bold">Learn more</span>
      </p>
    </div>
   <Header/>
   <First/>
   <Contact/>
   <VideoComponent/>
   <Second/>
   <Third/>
   <Fourth/>
   <Fifth/>
   <Accordition />
   <Footer/>
   </>
  );
}

export default App;
