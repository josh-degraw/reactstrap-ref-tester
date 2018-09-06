import * as React from 'react';
import './App.css';

import { Jumbotron, UncontrolledTooltip } from './reactstrap';

class App extends React.Component<{},{switched: boolean;}> {
  public readonly state ={switched: false}
  private ref1 = React.createRef<HTMLAnchorElement>();


  public componentDidMount(){
    setTimeout(()=>this.setState({switched:true}),5000);
  }

  public render() {
    return (
      <Jumbotron>
          <h1 className="App-title">Ref tester</h1>
          <p>
            <a href="#" ref={this.state.switched? undefined: this.ref1}>This uses a ref object</a>  
            <br/>        
            <a href="#" ref={this.state.switched? this.ref1: undefined}>This will have the tooltip after a few seconds</a>          
            <UncontrolledTooltip target={this.ref1}>Hello</UncontrolledTooltip>
          </p>
      </Jumbotron>
    );
  }
}

export default App;
