import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <Header />
        <ContactForm />
      </div>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
