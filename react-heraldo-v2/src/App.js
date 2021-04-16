import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardsLeftSection from './components/CardsLeftSection.js';
import CardsMidSection from './components/CardsMidSection.js';


function App() {
  return (
    <div class="container">
      <Header />
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <CardsLeftSection />
        </div>
        <div className="col-md-6 col-sm-12">
          <CardsMidSection />
        </div>
        <div className="col-md-3 col-sm-12">
          <CardsLeftSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
