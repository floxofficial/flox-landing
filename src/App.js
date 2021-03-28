import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import shot from 'assets/images/shot.png';
import Header from 'Components/Header';

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <div className="header-info">Conflux wallet</div>
                <h1 className="header-title">Powerful and simple Conflux desktop wallet</h1>
                <p className="header-desc">Flox is an open-source desktop wallet that allows you to manage your assets on the Conflux network.</p>
              </div>
            </div>
            <img src={shot} className="header-shot" alt="fullet"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
