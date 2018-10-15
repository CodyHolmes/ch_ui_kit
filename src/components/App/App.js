import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Buttons from '../Buttons/Buttons';
import CodeBlock from '../CodeBlock/CodeBlock';
import Navbar from '../Navbar/Navbar';
import TableOfContents from './TableOfContents/TableOfContents';
import ItemContainerWithHeader from './ItemContainerWithHeader/ItemContainerWithHeader';

class App extends Component {
  render() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <ItemContainerWithHeader
                        exact={true}
                        path="/"
                        component={TableOfContents}
                        title="Table Of Contents"
                        subtitle = "Click an item to see a demo and code!"
                        />
                    <ItemContainerWithHeader
                        exact={true}
                        path="/Buttons"
                        component={Buttons}
                        title="Buttons"
                        subtitle = "Some awesome buttons"
                        githubLink = "https://github.com/CodyHolmes/ch_ui_kit/tree/master/src/components/Buttons"
                        />
                    <ItemContainerWithHeader
                        exact={true}
                        path="/CodeBlock"
                        component={CodeBlock}
                        title="Code Block"
                        subtitle = "Make code stand out"
                        code="console.log('Hello World!');"
                        githubLink = "https://github.com/CodyHolmes/ch_ui_kit/tree/master/src/components/CodeBlock"
                        />
                    <Route exact={true} path="/Navbar" component={Navbar}/>
                    <nav className="floating-action-button" >
                        <Link to='/' className="home-button">
                            <i className="back-icon fas fa-home" aria-hidden="true"></i>
                        </Link>
                    </nav>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
