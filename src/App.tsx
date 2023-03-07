import React, {ReactNode} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./features/Main";

const Aligner1 = ({children}: { children: ReactNode[] | ReactNode }) => {
    return (
        <div className="row">
            <div className="col-md-11 offset-md-4">
                {children}
            </div>
        </div>
    );
}
const Aligner2 = ({children}: { children: ReactNode[] | ReactNode }) => {
    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                {children}
            </div>
        </div>
    );
}
const Aligner3 = ({children}: { children: ReactNode[] | ReactNode }) => {
    return (
        <div className="row">
            <div className="w-50 mx-auto">
                {children}
            </div>
        </div>
    );
}

function App() {
    return (

        <Aligner1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </Aligner1>
    );
}

/*
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */

export default App;
