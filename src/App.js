import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Content/Feed/Feed";
import Photos from "./components/Content/Photos/Photos";



const App = (props) => {
    return (<BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <div>
                <Route path='/messages' render={ () => <Dialogs store={props.store} />} />
                <Route path='/profile' render={ () => <Profile store={props.store}/>} />
                <Route path='/feed' render={ () => <Feed />} />
                <Route path='/photos' render={ () => <Photos/>} />
            </div>
        </div>
    </BrowserRouter>
    );
};


export default App;
