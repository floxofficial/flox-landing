import classNames from 'classnames';
import shot from 'assets/images/shot.png';
import {ReactComponent as Safe} from 'assets/images/safe.svg';
import {ReactComponent as Thunder} from 'assets/images/thunder.svg';
import {ReactComponent as Laptop} from 'assets/images/laptop.svg';
import Header from 'Components/Header';
import Feature from 'Components/Feature';
import Footer from 'Components/Footer';
import SelectOption from 'Components/SelectOption';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const features = [
  {title: 'Safe', desc: 'Flox is an open-source, client-side application. Your private key will not be stored anywhere.', icon: <Safe />},
  {title: 'Accessible', desc: 'Flox is currently available for three popular operating systems, macOS, Windows, and Linux. You can install it on your PC.', icon: <Laptop />},
  {title: 'Powerful', desc: 'With Flox, you can manage your assets in the Conflux network and perform operations such as sending and receiving tokens.', icon: <Thunder />},
]

const downloads = [
  {label: 'MacOs', value: '1'},
  {label: 'Windows', value: '2'},
  {label: 'Linux', value: '3'},
]

function App() {
  return (
    <>
      <header className="layout">
        <Header />
      </header>
      <div className="layout content">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 col-11 text-center">
            <div className="header-info">Conflux wallet</div>
            <h1 className="header-title">Powerful and simple Conflux desktop wallet</h1>
            <p className="header-desc">Flox is an open-source desktop wallet that allows you to manage your assets on the Conflux network.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="button-group">
              <SelectOption items={downloads} width={172} height={69} />
              <a href="/" className="group-link">Download</a>
            </div>
          </div>
        </div>
        <img src={shot} className="header-shot" alt="fullet"/>
      </div>
      <div className="content">
        <h3 className="feature-title">Flox features</h3>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6  col-sm-12 col-12 feature-col" key={index}>
              <Feature data={feature} />
            </div>
          ))}
        </div>
      </div>
      <footer className="layout">
        <Footer />
      </footer>
    </>
  );
}

export default App;
