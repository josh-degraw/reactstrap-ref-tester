import * as React from 'react';
import './App.css';

import { Jumbotron, UncontrolledTooltip } from './reactstrap';

class App extends React.Component {
  private ref1 = React.createRef<HTMLAnchorElement>();

  public render() {
    return (
      <Jumbotron>
          <h1 className="App-title">Ref tester</h1>
          <p>
            <a href="#" ref={this.ref1}>This uses a ref object</a>          
            <UncontrolledTooltip target={this.ref1}>Hello</UncontrolledTooltip>
          </p>
      </Jumbotron>
    );
  }
}

export default App;
